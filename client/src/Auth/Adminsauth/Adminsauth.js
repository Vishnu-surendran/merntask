import React from 'react'
import { Superadminactions,Adminaction,Adminusersactions } from '../../Store/Store'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { key } from '../../Loaders/Loader'
function Adminsauth() {
    const navigate=useNavigate()

   /*  Superadmin middlewares */

      /* 1.Superadmin Login */

     const SuperAdminlogin=(data)=>{
        return async(dispatch)=>{
            const login=async()=>{
                try{
                  dispatch(Superadminactions.setIsloading(true))
                  const response=await axios.post(`${key}/api/superadmin/login`,data)
                  dispatch(Superadminactions.setIsloading(false))
                  dispatch(Superadminactions.setError(null))
            dispatch(Superadminactions.login(JSON.stringify(response.data)))
            localStorage.setItem("superadmin",JSON.stringify({token:response.data}))
            navigate("/superadmin")
                }catch(error){
                  dispatch(Superadminactions.setIsloading(false))
                  const {response:{data}}=error
              dispatch(Superadminactions.setError(data))
                }
            
              }
             await login();
        }
    }

    /* 2.Admin Block/Unblock */

    const Adminmanage=(id)=>{
      return async(dispatch)=>{
         const Adminblock=async()=>{
try{
  dispatch(Superadminactions.setWarning())
  dispatch(Superadminactions.setIsloading(true))
const response=await axios.patch(`${key}/api/superadmin/adminmanage`,{adminId:id})
dispatch(Superadminactions.adminManage(id))
dispatch(Superadminactions.setWarning())
dispatch(Superadminactions.setIsloading(false))
}catch(error){
  dispatch(Superadminactions.setIsloading(false))
  const {response:{data}}=error
dispatch(Superadminactions.setError(data))
}
         }

         await Adminblock()
      }
    }

   /* 3.Create admin */

    const Admincreate=(data)=>{
      return async(dispatch)=>{
    
    const Newadmin=async()=>{
    
    try{
      dispatch(Superadminactions.setIsloading(true))
      const response=await axios.post(`${key}/api/superadmin/createadmin`,data)
      dispatch(Superadminactions.addAdmins(response.data))
dispatch(Superadminactions.setModal(false))
      dispatch(Superadminactions.setIsloading(false))
    }catch(error){
      dispatch(Superadminactions.setIsloading(false))
      const {response:{data}}=error
    dispatch(Superadminactions.setError(data))
    }
    
    
    }
    await Newadmin()
      }
    }

/* 4.Superadmin product approval */
const Productverify=(id)=>{
  return async(dispatch)=>{
      const Productverified=async()=>{
          try{
            dispatch(Superadminactions.setIsloading(true))
            const response=await axios.patch(`${key}/api/superadmin/product`,{id:id})
            dispatch(Adminusersactions.setIsloading(false))
      dispatch(Superadminactions.productManage(id))
      dispatch(Superadminactions.setError(null))
          }catch(error){
            dispatch(Superadminactions.setIsloading(false))
            const {response:{data}}=error
            dispatch(Superadminactions.setError(data))
          }
      
        }
       await Productverified();
  }
}

const Superadminlogout=()=>{
  const logout=()=>{
    localStorage.removeItem("superadmin")
    navigate("/superadminlogin")
  }
  logout()
  }


/* Admin Middlewares */

/* 1.Adminlogin */
     const Admlogin=(data)=>{
        return async(dispatch)=>{
            const login=async()=>{
                try{
                  dispatch(Adminaction.setLoading(true))
                  const response=await axios.post(`${key}/api/admin/login`,data)
                  dispatch(Adminaction.setLoading(false))
                  dispatch(Adminaction.setError(null))
            dispatch(Adminaction.login(JSON.stringify(response.data)))
            localStorage.setItem("admin",JSON.stringify({token:response.data}))
            navigate("/admin")
                }catch(error){
                  dispatch(Adminaction.setLoading(false))
                  console.log(error);
                  const {response:{data}}=error
              dispatch(Adminaction.setError(data))
                }
            
              }
             await login();
        }
    }
    
    /* 2.Adminuser creation */
    const Adminuseradd=(data)=>{
      return async(dispatch)=>{
         const Newadminuser=async()=>{
    try{
    dispatch(Adminaction.setLoading(true))
    const response=await axios.post(`${key}/api/admin/createadminuser`,data)
    dispatch(Adminaction.setError(null))
    dispatch(Adminaction.Addadminusers(response.data))
    dispatch(Adminaction.setModal(false))
    dispatch(Adminaction.setLoading(false))
    }catch(error){
    dispatch(Adminaction.setLoading(false))
    const {response:{data}}=error
    dispatch(Adminaction.setError(data))
    }
         }
     
         await Newadminuser()
        }
    
    
    
    }
    
/* 3.AdminuserBlock/Unblock */

    const Adminusermanage=(id)=>{
      return async(dispatch)=>{
         const Adminuserblock=async()=>{
try{
  dispatch(Adminaction.setLoading(true))
const response=await axios.patch(`${key}/api/admin/adminuser/edit/`,{id:id})
dispatch(Adminaction.Adminusersmanage(id))
dispatch(Adminaction.setLoading(false))
}catch(error){
  dispatch(Adminaction.setLoading(false))
  const {response:{data}}=error
  dispatch(Adminaction.setError(data))
}
 
}
await Adminuserblock()
      }
    }

/* 3.Admin productapproval */

const ProductApproval=(id)=>{
  return async(dispatch)=>{
      const Productapproved=async()=>{
          try{
            dispatch(Adminaction.setLoading(true))
            const response=await axios.patch(`${key}/api/admin/product`,{id:id})
            dispatch(Adminusersactions.setIsloading(false))
      dispatch(Adminaction.productManage(id))
      dispatch(Adminaction.setError(null))
          }catch(error){
            dispatch(Adminusersactions.setIsloading(false))
            const {response:{data}}=error
            dispatch(Adminaction.setError(data))
          }
      
        }
       await Productapproved();
  }
}

const Adminlogout=()=>{
  const logout=()=>{
     navigate("/adminlogin")
    localStorage.removeItem("admin")
   
  }
  logout()
  }

    

/* Adminuser Middlewares */
/* 
1.Adminuser Login */
    const Admuserlogin=(data)=>{
        return async(dispatch)=>{
            const login=async()=>{
                try{
                  dispatch(Adminusersactions.setIsloading(true))
                  const response=await axios.post(`${key}/api/adminusers/login`,data)
                  dispatch(Adminusersactions.setIsloading(false))
            dispatch(Adminusersactions.login(JSON.stringify(response.data)))
            dispatch(Adminusersactions.setError(null))
            localStorage.setItem("adminuser",JSON.stringify({token:response.data}))
            navigate("/adminuser")
                }catch(error){
                  dispatch(Adminusersactions.setIsloading(false))
                  const {response:{data}}=error
              dispatch(Adminusersactions.setError(data))
                }
            
              }
             await login();
        }
    }


/* 2.Product Add */
  const ProductAdd=(data)=>{
        return async(dispatch)=>{
            const Newproduct=async()=>{
                try{
                  dispatch(Adminusersactions.setIsloading(true))
               
                  const response=await axios.post(`${key}/api/adminusers/createproduct`,data)
                  dispatch(Adminusersactions.setIsloading(false))
                  dispatch(Adminusersactions.setModal(false))
            dispatch(Adminusersactions.addProducts(response.data))
            dispatch(Adminusersactions.setError(null))
                }catch(error){
                  dispatch(Adminusersactions.setIsloading(false))
                  const {response:{data}}=error
              dispatch(Adminusersactions.setError(data))
                }
            
              }
             await Newproduct();
        }
    }



/* 3.Product List/Unlist */


const Productmanage=(id)=>{
  return async(dispatch)=>{
      const Productunlist=async()=>{
          try{
            dispatch(Adminusersactions.setIsloading(true))
            const response=await axios.patch(`${key}api/adminuser/product/edit`,id)
            dispatch(Adminusersactions.setIsloading(false))
      dispatch(Adminusersactions.productManage(id))
      dispatch(Adminusersactions.setError(null))
          }catch(error){
            dispatch(Adminusersactions.setIsloading(false))
            const {response:{data}}=error
        dispatch(Adminusersactions.setError(data))
          }
      
        }
       await Productunlist();
  }
}

const Adminuserlogout=()=>{
  const logout=()=>{
    localStorage.removeItem("adminuser")
    navigate("/adminuserlogin")
  }
  logout()
  }



   
    



return {SuperAdminlogin,Admlogin,Admuserlogin,Admincreate,Adminmanage,Adminuseradd,Adminusermanage,ProductAdd,Productmanage,ProductApproval,Productverify,Adminuserlogout,Adminlogout,Superadminlogout }

}


export default Adminsauth