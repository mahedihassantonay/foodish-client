/* eslint-disable react/jsx-no-undef */
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import RequireRoute from "../components/Auth/RequireRoute";

import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog";

import ErrorPage from "../components/Pages/ErrorPage";
import Recipes from "../components/Pages/Recipes";

import Main from "../layout/Main";

  const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement:<ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: ()=> fetch('https://chef-hunter-recipe-mahedihassantonay.vercel.app/chefsData')
                    
                },
                {
                    path: 'chefsData/:id',
                    element: <RequireRoute><Recipes /></RequireRoute>,
                    loader: ({params})=> fetch(`https://chef-hunter-recipe-mahedihassantonay.vercel.app/chefsData/${params.id}`)
                    
                },
                {
                    path: 'blog',
                    element: <Blog />

                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                }
            ]
            
        }
  ])

  export default router;