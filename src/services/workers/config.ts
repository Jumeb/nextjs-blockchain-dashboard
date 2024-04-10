import { APP_CONSTANTS } from "@/lib/assets/constanst";

export const config = (data: any) => {
    let _data = JSON.stringify({
        "query": data,
        "variables": "{}"
    })
    return {
        method: "POST",
        maxBodyLength: Infinity,
        url: APP_CONSTANTS.ENV.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': APP_CONSTANTS.ENV.X_API_KEY,
            'Authorization': `Bearer ${APP_CONSTANTS.ENV.API_TOKEN}`
        },
        data: _data
    }
}