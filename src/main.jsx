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
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './pages/Home/PrivateRoute.jsx';
import Product from './pages/Home/Product.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5100/addProduct')
      },
      {
        path: "addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5100/addProduct/${params.id}`)
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
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'product/:_id',
        element:<PrivateRoute><Product></Product></PrivateRoute>,
        loader: () => fetch('http://localhost:5100/addProduct')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>       <RouterProvider router={router} />
</AuthProvider>

  </React.StrictMode>,
)
