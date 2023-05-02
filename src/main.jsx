import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Food from './component/Food/Food';
import Shop from './pages/Home/Shop/Shop';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'shop',
        element:<Shop></Shop>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/food',
        element:<Food></Food>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
