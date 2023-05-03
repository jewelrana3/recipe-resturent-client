import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Shop from "../pages/Shop/Shop";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Catacory from "../pages/Catacory/Catacory";

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
          path:'/res/:id',
          element:<Catacory></Catacory>
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
        // {
        //   path:'/blog',
        //   element:<Blog></Blog>
        // },
        // {
        //   path:'/food',
        //   element:<Food></Food>
        // }
      ]
    }
  ])

  export default router;