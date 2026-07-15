import { redirect } from "next/navigation";
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

    // return res.json();
    return handleStatusCode(res);
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
    // return res.json();
    return handleStatusCode(res);
}


// Status code error handle
export const handleStatusCode = (res: Response) => {

    if (res.status === 401) {
        redirect("/error/unauthorized")
    }
    else if (res.status === 403) {
        redirect("/error/forbidden")
    }
    else if (res.status === 404) {
        redirect("/error/not-found")
    }
    else if (res.status === 500) {
        redirect("/error/server-error")
    }

    return res.json();
}