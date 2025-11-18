export interface orderItems {
    id: number,
    name: string,
    price: number,
    ImageUrl: string
}

export interface Item {
    id: number,
    name: string,
    price: number,
    ImageUrl: string
    item?: orderItems
}

export type ResponseItems = Item[]


