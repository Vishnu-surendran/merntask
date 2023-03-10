import axios from 'axios'
import { json,useNavigate,redirect, Navigate } from 'react-router-dom'


  
export const key="https://merntaskbackend.onrender.com"

export const Alladminusers=async()=>{
  try{
const response=await axios.get(`${key}/api/admin/adminusers`)
return response.data
  }catch(error){
    const {response:{data}}=error
    return json(data)
  }
}

export const Allproducts=async()=>{
  try{
    const response=await axios.get(`${key}/api/adminusers/products`)
    return response.data
  }catch(error){
    const {response:{data}}=error
    return json(data)
  }
}

export const Alladmins=async()=>{
  try{
    const response=await axios.get(`${key}/api/superadmin/admins`)
    return response.data
  }catch(error){
       const {response:{data}}=error
       return json(data)
  }

}


export const Adminauth=()=>{
 const admin= localStorage.getItem("admin")
 if(!admin){
 return <Navigate to="/adminlogin" replace/>
 }

}

export const SuperAdminauth=()=>{
  const admin= localStorage.getItem("superadmin")
  if(!admin){
  return ("/superadminlogin")
  }
  return 
 }


 export const Adminusersauth=()=>{
  const admin= localStorage.getItem("adminuser")
  if(!admin){
  return ("/adminuserlogin")
  }
 }