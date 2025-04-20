import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project1 from './components/project1.jsx'
import Project2 from './components/Project2.jsx'
import Memomize from './components/Memomize.jsx'
import CurrencyConverter from './components/currency-converter/CurrencyConverter.jsx'
import GetWidth from './customhookcomponents/GetWidth.jsx'
import Header from './react-router/layout/Header.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './react-router/router.jsx'

createRoot(document.getElementById('root')).render(
 
    // <Project2 />
    // <Memomize />
    // <CurrencyConverter />
    // <GetWidth />
    <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
