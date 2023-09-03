import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import TypoGrapy from "../pages/TypoGrapy/TypoGrapy";
import About from "../pages/About/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'blog-details',
          element:<BlogDetails></BlogDetails>
        },
        {
          path:'typograpy',
          element:<TypoGrapy></TypoGrapy>
        },
        {
          path:'recipe/:id',
          element:<PrivateRouter><RecipeDetails></RecipeDetails></PrivateRouter>,
          loader:({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-jewelrana3.vercel.app/food/${params.id}`),
        
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;