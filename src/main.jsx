import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from "./routes/root";
import Index from './routes/index'
import ErrorElement from './routes/ErrorElement'

import Sessions, { loader as sessionsLoader } from './routes/Sessions/Sessions'
import Session, { loader as sessionLoader} from './routes/Sessions/Session'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        errorElement: <ErrorElement />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/sessions",
            element: <Sessions />,
            loader: sessionsLoader
          },
          {
            path: "/sessions/:id",
            element: <Session />,
            loader: sessionLoader
          }
         ]
      }]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
