import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";



import Catacory from "../pages/Catacory/Catacory";
import Food from "../pages/Food/Food/Food";
import ResturentLayout from "../layout/ResturentLayout";
import Loginlayout from "../layout/Loginlayout/Loginlayout";
import Navigate from "../pages/Sheard/Navigate/Navigate";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Loginlayout></Loginlayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/res/0'></Navigate>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
    {
      path:'res',
      element:<Main></Main>,
      children:[
       
        {
          path:':id',
          element:<Catacory></Catacory>,
          loader:({params})=> fetch(`https://assignment-10-server-jewelrana3.vercel.app/resturent/${params.id}`)
        },
        
      ]
    },
    {
      path:'food',
      element:<ResturentLayout></ResturentLayout>,
      children:[
        {
          path:':id',
          element:<PrivateRouter><Food></Food></PrivateRouter>,
          loader:({params})=> fetch(`https://assignment-10-server-jewelrana3.vercel.app/food/${params.id}`)
        }
      ]
    }
  ])

  export default router;