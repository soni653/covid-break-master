import React, { useState,useContext,useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'
import Part from './components/Part'
import Header from './components/Header'
import CartDetails from './components/CartDetails';
import Styled from "styled-components";
import PartContextProvider from "./components/context/PartContext";
import CartContextProvider from "./components/context/CartContext";
import  { cartReducer, intialState, ADD_CART, REMOVE_CART} from './reducers/cartReducer'




//styling
const AllContainer = Styled.div`
display: flex;
justify-content:center;
padding-top: 5%;
background: linear-gradient(21deg, rgba(115,226,15,0.7931547619047619) 2%, rgba(9,28,121,0.7147233893557423) 49%, rgba(0,168,255,0.4542191876750701) 88%);
height:100vh;
`



function App() {
  const [parts, setParts] = useState(data)
  const [state,dispatch] = useReducer(cartReducer, {items:[], total:0})
  //const [cart,setCart] = useState({item:[],total :0})

  const cartRemove =(id,name) => {
    dispatch({type: REMOVE_CART,payload:{id,name}})
  }
   const cartAdd = part =>{
     dispatch({type: ADD_CART,payload: {part}})
   }
  

  return (
    <Router>
      <PartContextProvider>
      <CartContextProvider>
      <Header  />
    <AllContainer>
      
    <div className="App">
        <Route exact path='/'>
          <StoreContainer  />
        </Route>
        <Route exact path='/category/:id'>
          <CategoryContainer  />
        </Route>
        <Route path='/cart'>
          <CartDetails />
        </Route>
    </div>

    </AllContainer>
    </CartContextProvider>
    </PartContextProvider>
    </Router>
  );
}

export default App;
