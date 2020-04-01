

export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"
export const intialState= {
    items:[],
    total: 0
}
export function cartReducer(state,action){
    switch(action.type){
       case ADD_CART :
           return {
               ...state,
               items: [...state.items,action.payload]
           }
           case REMOVE_CART :
               return{
                   ...state,
                   items: state.items.filter(item =>{
                       if(item.id == action.payload.id && item.name == action.payload.name){

                       }else{
                           return item
                       }
                       
                   } )
               }
        default:
             return state
    }
}