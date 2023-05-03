import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        // {
        //   path:'shop',
        //   element:<Shop></Shop>
        // },
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