const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const serverMutation = async (path: string, data: object, method = "POST") => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json();
}