import type { ResponseItems } from "../types/elements.type";
import makeRequest from "./makeRequest";


export async function getItemsService(): Promise<{data: ResponseItems}> {
    return makeRequest<{data: ResponseItems}>({
        url: 'https://71fc0f933db0f72a.mokky.dev/sneakers',
        method: "GET"
    })
}


