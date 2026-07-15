import { Analysis } from "@/app/analysis/manage/page";
import { serverFetch } from "./core/server"

export const testAnalysis = (page: string = "1") => {
    return serverFetch(`/test/pagination?page=${page}`);
}