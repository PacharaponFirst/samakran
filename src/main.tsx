import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './page/HomePage.tsx'
import { Layout } from './component/Layout.tsx'
import { MenuPage } from './page/MenuPage.tsx'
import { NewsPage } from './page/NewsPage.tsx'
import { UserPage } from './page/UserPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "menu",
        element: <MenuPage />
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
