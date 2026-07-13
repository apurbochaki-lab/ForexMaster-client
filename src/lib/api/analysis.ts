import { serverFetch } from "../core/server"

export const getAnalysis = async () => {
    return serverFetch("/api/get-analysis");
}

// Single data
export const getAnalysisById = async (id: string) => {
    return serverFetch(`/api/single-analysis/${id}`);
}