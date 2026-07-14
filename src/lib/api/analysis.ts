import { Analysis } from "@/app/analysis/manage/page";
import { serverFetch, serverMutation } from "../core/server"

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
export const getMyAnalysis = async (authorId: string | undefined): Promise<Analysis[]> => {
    const data = await serverFetch<Analysis[]>(`/api/my-analysis?authorId=${authorId}`);
    return data;
}

// Manage Analysis --> Delete analysis
export const deleteAnalysis = async (analysisId: string | undefined) => {
    return serverMutation(`/api/delete-analysis?analysisId=${analysisId}`, {}, "DELETE")
}