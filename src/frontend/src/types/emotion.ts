export interface EmotionRequest {
    mood: string;
    diary: string;
}
export interface EmotionResponse {
    id: string;
    data: string;
    nivel: number;
    mood: string;
    diary: string;
}