import React from 'react'
import { Navigate } from 'react-router-dom'

function Admin({children}) {
  const admin=localStorage.getItem("admin")
  if(!admin){
    return <Navigate to="/adminlogin" replace/>
  }
return children
}

export default Admin