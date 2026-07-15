import { Analysis, AnalysisResponse } from "@/app/analysis/manage/page";
import { serverFetch, serverMutation } from "../core/server"
import { protectedFetch } from "../core/token/getTokenServer";

// All analysis data
export const getAnalysis = async (): Promise<Analysis[]> => {
    return serverFetch<Analysis[]>("/api/get-analysis");
}

// Single data
export const getAnalysisById = async (id: string): Promise<Analysis> => {
    return serverFetch<Analysis>(`/api/single-analysis/${id}`);
}


// export const getMyAnalysis = async (authorId: string | undefined) => {
//     return serverFetch(`/api/my-analysis?authorId=${authorId}`);
// }


// Manage Analysis --> get only author data
export const getMyAnalysis = async (
    authorId: (string | undefined),
    page: string = "1"

): Promise<AnalysisResponse> => {
    const data = await protectedFetch<AnalysisResponse>(`/api/my-analysis?authorId=${authorId}&page=${page}`);
    return data;
}

// Manage Analysis --> Delete analysis
export const deleteAnalysis = async (analysisId: string | undefined) => {
    return serverMutation(`/api/delete-analysis?analysisId=${analysisId}`, {}, "DELETE")
}