import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom" // import this
// import router from "./routes/router.js" // your router file
import Providers from "./app/provider.jsx" // tanstack query
import router from './routes/router.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} /> {/* wrap with RouterProvider */}
    </Providers>
  </React.StrictMode>,
)