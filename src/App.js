import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'
import Part from './components/Part'
import Header from './components/Header'
import CartDetails from './components/CartDetails';
import PartContextProvider from "./contexts/PartContext"
import CartContextProvider from "./contexts/CartContext"

function App() {
  // const [parts, setParts] = useState(data)
  // const [cart, setCart] = useState({ items: [], total: 0 })

  // const cartRemove = (id, name) => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.filter(item => {
  //       if (item.id == id && item.name == name) {
  //       } else {
  //         return item
  //       }
  //     })
  //   })
  // }

  return (
    <div className="App">

      <Router>
        <PartContextProvider>
          <CartContextProvider>
            <Header />
            <Route exact path='/'>
              <StoreContainer />
            </Route>
            <Route exact path='/category/:id'>
              <CategoryContainer />
            </Route>
            <Route path='/category/:id/part/:partId'>
              <Part />
            </Route>
            <Route path='/cart'>
              <CartDetails />
            </Route>
          </CartContextProvider>
        </PartContextProvider>
      </Router>
    </div>
  );
}

export default App;
