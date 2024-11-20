import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Landing from "./pages/Landing"
import About from "./pages/About"
import Project from './pages/Project'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/tentang",
    element: <About />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/kontak",
    element: <Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
