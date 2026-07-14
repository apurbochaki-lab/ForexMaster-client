import { authHeaderClient } from "./token/getTokenClient";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const serverMutation = async (path: string, data: object, method = "POST") => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...await authHeaderClient()
        },
        body: JSON.stringify(data)
    })

    return res.json();
}


// export const serverFetch = async (path: string) => {
//     const res = await fetch(`${baseUrl}${path}`);
//     // console.log("Fetching Link :", `${baseUrl}${path}`)
//     return res.json();
// }


export const serverFetch = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
        cache: "no-store",
        headers: {
            'Content-Type': 'application/json',
            ...await authHeaderClient()
        }
    });
    return res.json();
}