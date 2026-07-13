import { serverFetch } from "../core/server"

export const getAnalysis = async () => {
    return serverFetch("/api/get-analysis");
}