import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contaxt from './Context/Contaxt.jsx'

createRoot(document.getElementById('root')).render(
  <Contaxt>
     
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  </Contaxt>
   
)
