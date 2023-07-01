import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header'
import HomePage from './pages/homepage'
import Category from './pages/category'

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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
