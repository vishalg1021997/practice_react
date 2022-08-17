import { Add_Item, Remove_Item, Update_Item } from "./actiontypes";


export const addItem = (payload) => ({
    type: Add_Item,
    payload:payload
})

export const removeItem = (payload) => ({
    type: Remove_Item,
    payload:payload
})

export const updateItem = (payload) => ({
    type:Update_Item,
    payload:payload
})