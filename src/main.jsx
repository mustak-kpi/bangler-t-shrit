import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componentes/Home/Home.jsx';
import MainTitle from './componentes/layout/MainTitle.jsx';
import OrderReview from './componentes/OrderReview/OrderReview.jsx';
import InventoryReview from './componentes/InventoryReview/InventoryReview.jsx';
import Graendpa from './componentes/Graendpa/Graendpa.jsx';
const router = createBrowserRouter([
   {
    path: '/',
    element: <MainTitle></MainTitle>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('t-shrit.json')
      },
      {
        path: 'orders',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'inventory',
        element: <InventoryReview></InventoryReview>
      },
      {
        path: '/grendpa',
        element: <Graendpa></Graendpa>
      }
    ]
   }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
