import { Add_Item, Remove_Item, Update_Item } from "./actiontypes";


export const reducer = (store,action) =>{
    switch(action.type){
        case Add_Item:
            return{
                ...store,
        todo: [...store.todo, action.payload]
            }
        case Remove_Item:
            return{
                ...store,
        todo: [store.todo.filter((el) => el.id !== action.payload)]
            }
        case Update_Item:
            return{
                
            }
        default:
            return store;
    }   
}