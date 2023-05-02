import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog";
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
                    path: 'blog',
                    element: <Blog />

                }
            ]
            
        }
  ])

  export default router;