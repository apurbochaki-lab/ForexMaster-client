// export const getFeatured = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/featured-charts`);
//     return res.json();
// }

import { Analysis } from "@/app/analysis/manage/page"
import { serverFetch } from "../core/server"


export const getFeatured = async (): Promise<Analysis[]> => {
    return serverFetch<Analysis[]>("/api/featured-charts")
}