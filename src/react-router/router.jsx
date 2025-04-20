import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/about/Blog";
import News from "./components/about/News";
import Gitub from "./components/Github";
import { githubInfoLoader } from "./components/githubInfoLoader";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />,
                children: [
                    {
                        path: 'blog',
                        element: <Blog />
                    },
                    {
                        path: 'newsletter',
                        element: <News />
                    }
                ]

            },
            {
                path: 'contact',
                element: <Contact />
            },
            // github info loader   
            {
                path: 'github',
                element: <Gitub />,
                loader: githubInfoLoader

            }
        ]
    }
])

export default router;