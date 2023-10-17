import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './AddProduct.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Home/Register.jsx';
import Login from './pages/Home/Login.jsx';
import MyCart from './MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"updateProduct",
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'mycart',
        element: <MyCart></MyCart>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
