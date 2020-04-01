
import React, {createContext, useState, useReducer} from "react"; 
import {cartReducer,ADD_CART,REMOVE_CART} from '../../reducers/cartReducer'

export const CartContext=createContext();

const CartContextProvider =(props) => {
    
  const [cart,dispatch] = useReducer(cartReducer, {items:[], total:0})
  //const [cart,setCart] = useState({item:[],total :0})

  const cartRemove =(id,name) => {
    dispatch({type: REMOVE_CART,payload:{id,name}})
  }
   const cartAdd = part =>{
     dispatch({type: ADD_CART,payload: part})
   }
  
   // const[cart,setCart]=useState({items:[],total:0})

    // const cartRemove=(id,name)=>{
    //     setCart({
    //         ...cart,
    //         items:cart.items.filter(item=>{
    //             if(item.id && item.name===name){
    //             }else{
    //                     return item
    //                 }
    //             }
    //         )
    //     })
    // }
    // const cartAdd=part=>{
    //     setCart(prevCart=>({
    //         ...prevCart,
    //         items:[...prevCart.items,part]
    //     }))
    // }

    return(
        <CartContext.Provider value = {{ cart,cartRemove,cartAdd}}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;