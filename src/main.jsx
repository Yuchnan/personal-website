import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Landing from "./pages/Landing"
import About from "./pages/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/about",
    element: <About />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
