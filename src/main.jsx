import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project1 from './components/project1.jsx'
import Project2 from './components/Project2.jsx'
import Memomize from './components/Memomize.jsx'
import CurrencyConverter from './components/currency-converter/CurrencyConverter.jsx'

createRoot(document.getElementById('root')).render(
 
    // <Project2 />
    // <Memomize />
    <CurrencyConverter />
  // </StrictMode>,
)
