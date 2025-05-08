import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Service from './Pages/Service/Service.jsx';
import AboutUs from './Pages/About/AboutUs.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import SingleService from './Pages/Service/SingleService.jsx';
import SIngleBlog from './Pages/Blog/SIngleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/service/:id",
        element: <SingleService></SingleService>
      },
      {
        path: "/blog/:id",
        element: <SIngleBlog></SIngleBlog>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
