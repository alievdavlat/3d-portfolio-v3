import React from 'react'
import { Outlet, Navigate } from "react-router-dom"

const Middleware = ({value}) => {
  
      let password = import.meta.env.VITE_APP_ADMIN_EMAIL
      let email = import.meta.env.VITE_APP_ADMIN_PASSWORD

      if (value.email === email && value.password === password) {
          return <Outlet/>
      }

      return(
        <Navigate to='/' replace />
      )
  
}

export default Middleware