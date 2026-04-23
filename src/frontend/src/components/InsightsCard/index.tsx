import "./InsightsCard.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { getWeeklyEmotions } from "@/services/emotion";

const InsightsCard = () => {
  const [lineChartData, setLineChartData] = useState<any[]>([]);
  const [barChartData, setBarChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const pesosMood: Record<string, number> = {
    "Otimo": 5, "Bom": 4, "Okay": 3, "Triste": 2, "Estressado": 1
  };
  const nomesMood: Record<number, string> = {
    5: "Ótimo", 4: "Bom", 3: "Okay", 2: "Triste", 1: "Estressado"
  };

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosDaApi = await getWeeklyEmotions();

        const formatadoParaLinha = dadosDaApi.map((item) => {
          const nivelNumerico = item.nivel > 0 ? item.nivel : (pesosMood[item.mood] || 0);

          const dataObjeto = item.data ? new Date(item.data) : new Date();
          const diaFormatado = isNaN(dataObjeto.getTime()) 
            ? "???" 
            : dataObjeto.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "").toUpperCase();

          return {
            day: diaFormatado,
            mood: nivelNumerico,
            labelMood: item.mood || nomesMood[nivelNumerico] || "Não definido" 
          };
        });

        const positivos = dadosDaApi.filter(e => {
          const valor = e.nivel > 0 ? e.nivel : (pesosMood[e.mood] || 0);
          return valor >= 4;
        }).length;

        const negativos = dadosDaApi.filter(e => {
          const valor = e.nivel > 0 ? e.nivel : (pesosMood[e.mood] || 0);
          return valor < 4 && valor > 0;
        }).length;

        setLineChartData(formatadoParaLinha);
        setBarChartData([
          { name: "Positivo", value: positivos },
          { name: "Negativo", value: negativos },
        ]);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  if (loading) {
    return <div className="insights-card">Carregando insights...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="insights-card insights-section"
    >
      <h3 className="insights-heading">Insights Emocionais</h3>

      <div>
        <p className="chart-label">Tendência de humor esta semana</p>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineChartData}>
              <defs>
                <linearGradient id="moodGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                axisLine={false} 
                style={{ fontSize: "0.75rem" }} 
              />
              <YAxis hide domain={[0, 5]} />
              <Tooltip 
                formatter={(value: number, name: string, props: any) => {
                  return [props.payload.labelMood, "Humor"];
                }}
                labelStyle={{ display: "none" }} 
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              />
              <Area
                type="monotone"
                dataKey="mood"
                stroke="#4A90E2"
                fill="url(#moodGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <p className="chart-label">Positivo vs Negativo</p>
        <div className="chart-container-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                style={{ fontSize: "0.75rem" }} 
                width={70} 
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightsCard;