import React from 'react'
import { Navigate } from 'react-router-dom'

function Superadmin({children}) {
  const admin=localStorage.getItem("superadmin")
  if(!admin){
    return <Navigate to="/superadminlogin" replace/>
  }
return children
}

export default Superadmin