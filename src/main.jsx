import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './components/Layout'
import Feedback from './pages/Feedback'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/goit-react-hw-02-feedback",
        element: <Feedback/>,
      }
      ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
