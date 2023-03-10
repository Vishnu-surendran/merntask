import {createSlice,configureStore} from "@reduxjs/toolkit"
const Admin={
    Admin:null,
    status:null,
    Warning:null,
    error:null,
    modal:null,
    isloading:null,
    Adminusers:null,
    products:null
}
const Superadmin={
    superadmin:null,
    admins:null,
    error:null,
    modal:null,
    isloading:null,
    status:null,
    Warning:null,
    products:null,
}

const Adminusers={
    adminusers:null,
    products:null,
    error:null,
    modal:null,
    isloading:null,
    status:null
}


const User={
    user:null,
    error:null,
    isloading:null,
    products:null,
    message:null
}

const Superadminmanage=createSlice({
    name:"superadmin",
    initialState:Superadmin,
    reducers:{
        login(state,action){
            state.superadmin=action.payload
        },setIsloading(state,action){
state.isloading=action.payload
        },addAdmins(state,action){
            state.admins.push(action.payload)
        },Admins(state,action){
          state.admins=action.payload
        },adminManage(state,action){
            const admin=state.admins.find((admin)=>admin._id===action.payload)
            admin.isBlocked=!admin.isBlocked
        },setError(state,action){
        state.error=action.payload
        },  statusChange(state,action){
            state.status=action.payload
        },setModal(state,action){
state.modal=action.payload
        },setWarning(state,action){
            state.Warning=!state.Warning
        },productManage(state,action){
            const product=state.products.find((product)=>product._id===action.payload)
            product.isSuperadminverified=true
        },products(state,action){
            state.products=action.payload
                    }
    }
})


const Adminusersmanage=createSlice({
    name:"adminusers",
    initialState:Adminusers,
    reducers:{
        login(state,action){
            state.adminusers=action.payload
        },setIsloading(state,action){
state.isloading=action.payload
        },addProducts(state,action){
         state.products.push(action.payload)
        },editProducts(state,action){
            const product=state.products.find((product)=>product._id===action.payload)
        },productManage(state,action){
            const product=state.products.find((product)=>product._id===action.payload)
            product.isUnlisted=!product.isUnlisted
        },setError(state,action){
state.error=action.payload
        },products(state,action){
state.products=action.payload
        }, statusChange(state,action){
            state.status=action.payload
                },setModal(state,action){
                    state.modal=action.payload
                            }
    }
})








const Adminmanage=createSlice({
name:"Admin",
initialState:Admin,
reducers:{
    login(state,action){
state.Admin=action.payload
    },
    statusChange(state,action){
state.status=action.payload
    },setWarning(state,action){
        state.Warning=!state.Warning
    },setModal(state,action){
        state.modal=!state.modal
    },setLoading(state,action){
        state.isloading=action.payload
    },setError(state,action){
state.error=action.payload
    },Adminusers(state,action){
state.Adminusers=action.payload
    },Adminusersmanage(state,action){
const adminuser=state.Adminusers.find((adminusers)=>action.payload===adminusers._id)
adminuser.isBlocked=!adminuser.isBlocked
    },Addadminusers(state,action){
state.Adminusers.push(action.payload)
    },productManage(state,action){
        const product=state.products.find((product)=>product._id===action.payload)
        product.isAdminapproved=true
    },products(state,action){
        state.products=action.payload
                }
}
})


const Usermanage=createSlice({
    name:"user",
    initialState:User,
    reducers:{
        login(state,action){
state.user=action.payload
        },Signup(state,action){
state.isloading=action.payload
        },seterror(state,action){
state.error=action.payload
        },setLoading(state,action){
            state.isloading=action.payload
        },products(state,action){
            state.products=action.payload
        },setMessage(state,action){
state.message=action.payload
        }
    }
})

export const Adminaction=Adminmanage.actions
export const Useractions=Usermanage.actions
export const Superadminactions=Superadminmanage.actions
export const Adminusersactions=Adminusersmanage.actions
const store=configureStore({
    reducer:{Adminmanagement:Adminmanage.reducer,Usermanagement:Usermanage.reducer,Superadminmanagement:Superadminmanage.reducer,Adminusersmanagement:Adminusersmanage.reducer}
})

export default store
 
//User signup middleware  

//User Login middleware




//Superadmin Login middleware






// Admin login middleware



//Adminuser login middleware






/* export const Loginaction=(data)=>{
    return async(dispatch)=>{
        const login=async()=>{
            try{
              dispatch(Useractions.setLoading(true))
              const response=await axios.post("/api/user/login",data)
              dispatch(Useractions.setLoading(false))
        dispatch(Useractions.login(JSON.stringify(response.data)))
        localStorage.setItem("user",JSON.stringify({token:response.data}))
            }catch(error){
              dispatch(Useractions.setLoading(false))
              console.log(error);
              const {response:{data}}=error
          dispatch(Useractions.seterror(data))
            }
        
          }
         await login();
    }
}
 */


/* export const Loginaction=(data)=>{
    return async(dispatch)=>{
        const login=async()=>{
            try{
              dispatch(Useractions.setLoading(true))
              const response=await axios.post("/api/user/login",data)
              dispatch(Useractions.setLoading(false))
        dispatch(Useractions.login(JSON.stringify(response.data)))
        localStorage.setItem("user",JSON.stringify({token:response.data}))
            }catch(error){
              dispatch(Useractions.setLoading(false))
              console.log(error);
              const {response:{data}}=error
          dispatch(Useractions.seterror(data))
            }
        
          }
         await login();
    }
}



export const Loginaction=(data)=>{
    return async(dispatch)=>{
        const login=async()=>{
            try{
              dispatch(Useractions.setLoading(true))
              const response=await axios.post("/api/user/login",data)
              dispatch(Useractions.setLoading(false))
        dispatch(Useractions.login(JSON.stringify(response.data)))
        localStorage.setItem("user",JSON.stringify({token:response.data}))
            }catch(error){
              dispatch(Useractions.setLoading(false))
              console.log(error);
              const {response:{data}}=error
          dispatch(Useractions.seterror(data))
            }
        
          }
         await login();
    }
}


export const Loginaction=(data)=>{
    return async(dispatch)=>{
        const login=async()=>{
            try{
              dispatch(Useractions.setLoading(true))
              const response=await axios.post("/api/user/login",data)
              dispatch(Useractions.setLoading(false))
        dispatch(Useractions.login(JSON.stringify(response.data)))
        localStorage.setItem("user",JSON.stringify({token:response.data}))
            }catch(error){
              dispatch(Useractions.setLoading(false))
              console.log(error);
              const {response:{data}}=error
          dispatch(Useractions.seterror(data))
            }
        
          }
         await login();
    }
} */