import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header'
import HomePage from './pages/homepage'
import Category from './pages/category'
import Item from './pages/item'
import Cart from './pages/cart'
import Search from './pages/search'
import { Context } from './context'
import { useState } from 'react'


const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <Header />
      <HomePage />
    </>
  },
  {
    path: '/category',
    element:
    <>
      <Header />
      <Category />
    </>
  },
  {
    path: '/item',
    element:
    <>
      <Header />
      <Item />
    </>
  },
  {
    path: '/cart',
    element:
    <>
      <Header />
      <Cart />
    </>
  },
  {
    path: '/search',
    element:
    <>
      <Header />
      <Search />
    </>
  }
])

const Root = () => {

  
  const [ localCart, setLocalCart ] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  useEffect( () => {
    const number = localCart?.reduce( (val, el) => {
      return val+= el.quantity;
    }, 0)
    setCart(number);
    localStorage.setItem('cart', JSON.stringify(localCart));
  }, [localCart])
  
  const [ cart, setCart ] = useState(0);

  const updateLocalCart = (value) => {
    setLocalCart(value);
  }



  return(
    <Context.Provider value={{ localCart, cart, updateLocalCart }}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <Root />
)
