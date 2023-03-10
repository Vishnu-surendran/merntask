import React from 'react'
import { Navigate } from 'react-router-dom'

function Superadminlogin({children}) {
  const Superadmin=localStorage.getItem("superadmin")
  if(Superadmin){
    return <Navigate to="/superadmin" replace/>
  }
return children
}

export default Superadminlogin