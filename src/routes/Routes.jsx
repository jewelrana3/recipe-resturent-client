import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Shop from "../pages/Shop/Shop";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Catacory from "../pages/Catacory/Catacory";
import Food from "../pages/Food/Food/Food";
import ResturentLayout from "../layout/ResturentLayout";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Catacory></Catacory>,
          loader:()=> fetch('http://localhost:3000/food')
        },
        {
          path:'/res/:id',
          element:<Catacory></Catacory>,
          loader:({params})=> fetch(`http://localhost:3000/resturent/${params.id}`)
        },
        {
          path:'shop',
          element:<Shop></Shop>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
    {
      path:'food',
      element:<ResturentLayout></ResturentLayout>,
      children:[
        {
          path:':id',
          element:<Food></Food>,
          loader:({params})=> fetch(`http://localhost:3000/food/${params.id}`)
        }
      ]
    }
  ])

  export default router;