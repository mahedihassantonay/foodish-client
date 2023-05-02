import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog";
import ChefRecipe from "../components/Pages/ChefRecipe";

import Main from "../layout/Main";

  const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: ()=> fetch('http://localhost:5000/chefsData')
                    
                },
                {
                    path: 'chefsData/:id',
                    element: <ChefRecipe />,
                    loader: ({params})=> fetch(`http://localhost:5000/chefsData/${params.id}`)
                    
                },
                {
                    path: 'blog',
                    element: <Blog />

                }
            ]
            
        }
  ])

  export default router;