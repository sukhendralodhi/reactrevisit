import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/about/Blog";
import News from "./components/about/News";


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
            }
        ]
    }
])

export default router;