import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Shop from "../pages/Shop/Shop";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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