import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import Authprovider from './AuthProvider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
  <Authprovider>
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>,
  </Authprovider>
   
 </div>
)
