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

const weekData = [
  { day: "Mon", mood: 4 },
  { day: "Tue", mood: 3 },
  { day: "Wed", mood: 5 },
  { day: "Thu", mood: 2 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 3 },
];

const emotionData = [
  { name: "Positive", value: 65 },
  { name: "Negative", value: 35 },
];

const InsightsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-2xl card-shadow p-6 space-y-6"
    >
      <h3 className="text-lg font-semibold text-foreground">Emotional Insights</h3>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium">Mood trend this week</p>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weekData}>
              <defs>
                <linearGradient id="moodGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(214, 72%, 59%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(214, 72%, 59%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tickLine={false} axisLine={false} className="text-xs" />
              <YAxis hide domain={[0, 5]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="mood"
                stroke="hsl(214, 72%, 59%)"
                fill="url(#moodGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium">Positive vs Negative</p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={emotionData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} className="text-xs" width={70} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} fill="hsl(214, 72%, 59%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightsCard;
