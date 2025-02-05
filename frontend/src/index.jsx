// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/contextProvider.jsx'


createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <RouterProvider router={router} /> 
    </ContextProvider>
)
