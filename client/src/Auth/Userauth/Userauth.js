import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Useractions } from '../../Store/Store'
import axios from 'axios'
import { key } from '../../Loaders/Loader'
function Userauth() {
  const navigate=useNavigate()
  const Loginaction=(data)=>{
    return async(dispatch)=>{
        const login=async()=>{
            try{

              dispatch(Useractions.setLoading(true))
              const response=await axios.post(`${key}/api/user/login`,data)
              dispatch(Useractions.setLoading(false))
        dispatch(Useractions.login(JSON.stringify(response.data)))
        localStorage.setItem("user",JSON.stringify({token:response.data}))
        navigate("/")
            }catch(error){
              dispatch(Useractions.setLoading(false))
              console.log(error);
              const {response:{data}}=error
              console.log(data);
          dispatch(Useractions.seterror(data))
            }
    
          }
         await login();
    }
}

const Signupaction=(data)=>{
    return async(dispatch)=>{
        const Signup=async()=>{
            try{
              dispatch(Useractions.setLoading(true))
              const response=await axios.post(`${key}/api/user/register`,data)
              dispatch(Useractions.setLoading(false))
              dispatch(Useractions.seterror(null))
              navigate("/login")
            }catch(error){
              dispatch(Useractions.setLoading(false))
              const {response:{data}}=error
          dispatch(Useractions.seterror(data))
            }
          
          }
         await Signup();
    }
}

const Userlogout=()=>{
const logout=()=>{
  localStorage.removeItem("user")
  navigate("/login")
}
logout()
}

const Cart=(data)=>{
  return async(dispatch)=>{
      const Addtocart=async()=>{
          try{
            const response=await axios.post(`${key}/api/user/addtocart`,{proId:data})
         dispatch(Useractions.setMessage("Item Added to cart successfully"))
         dispatch(Useractions.seterror(null))
          }catch(error){
            dispatch(Useractions.setLoading(false))
            const {response:{data}}=error
        dispatch(Useractions.seterror(data))
          }
        }
       await Addtocart()
  }
}



return { Loginaction,Signupaction,Cart,Userlogout }
}

export default Userauth