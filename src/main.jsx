import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3' 
// import Page4 from './Page4'
import Page4Sample from './Page4-sampe'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { 
        //add sample children
        path: "/",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "page3",
        element: <Page4Sample/>
      }
    ],
  },
]);

const root = document.getElementById("root");
createRoot(root).render(
  <RouterProvider router={router} />,
);