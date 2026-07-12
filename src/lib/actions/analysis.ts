import { serverMutation } from "../core/server"

export const postAnalysis = async (data: object) => {
    return await serverMutation("/api/post-analysis", data)
}