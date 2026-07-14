import { authClient } from "@/lib/auth-client";

export const authHeaderClient = async () => {
    const { data: tokenData } = await authClient.token()
    const token = tokenData?.token;

    const headers = {
        "authorization": `Bearer ${token}`
    }
    return headers;
}