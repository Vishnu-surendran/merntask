import React,{useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { Adminaction, Superadminactions } from '../../../Store/Store'
import Modal from '../../Modal/Modal'
import Superadminlayout from '../Layout/Superadminlayout'
import Adminsauth from '../../../Auth/Adminsauth/Adminsauth'
import {useForm} from "react-hook-form"
function Admins() {
  const data=useLoaderData()
   const dispatch=useDispatch()
   const {register,handleSubmit,formState:{errors}}=useForm()
    const {status,Warning,modal,admins}=useSelector((state)=>state.Superadminmanagement)
const {Adminmanage,Admincreate}=Adminsauth()
useEffect(() => {
  dispatch(Superadminactions.Admins(data))
}, [])

const Adminadd=(data)=>{
dispatch(Admincreate(data))
}

const Blockconfirm=async(id)=>{
 dispatch(Adminmanage(id))
}
   
  return (
   <>
   <Superadminlayout>
    <div id="main-content" className="h-full w-full mt-3 bg-gray-50 relative overflow-y-auto lg:ml-32">
          <main>
             <div className={`${status ? "ml-14":""} lg:pt-6 px-4 `}>
                <div className="w-full h-[32rem]">                
  {admins ? <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Admins</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=>dispatch(Superadminactions.setModal(true))}>+ Add</button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
      <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Admin name
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Action
                        </th>
          </tr>
        </thead>

        <tbody>
          {admins && (admins.map((admins)=>{
  return <tr key={admins._id}>
   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
     {admins.username}
   </th>
 
   <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
     {admins.isActive ? <button className='bg-emerald-600 text-white px-1 py-1 rounded-sm'>Active</button>: <button className='bg-red-600 text-white px-1 py-1 rounded-sm'>Inactive</button> }

   </td>
   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
   {admins.isBlocked ? <button className='bg-emerald-800 text-white rounded-sm px-2 py-1 mr-2' onClick={()=>Blockconfirm(admins._id)}>Unblock</button>: 
<button className='bg-red-600 text-white rounded-sm px-2 py-1'onClick={()=>Blockconfirm(admins._id)}>Block</button> }

   </td>
 </tr>
          }))}
        </tbody>

       

      </table>
    </div>
    
  </div>  :<>No Admins</> }
  
                      
                    
           
                </div>
             </div>
          </main>
       
         
       </div>
 

   </Superadminlayout>
   {modal && (
   <Modal>
          
            <div className="px-6 py-6 lg:px-3">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Admin</h3>
                <form onSubmit={handleSubmit(Adminadd)}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" {...register("name",{required:"Username required"})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"/>
                  
                    </div>
                    <p className='text-red-500'>{errors.name?.message}</p>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                       
                        <input type="password" {...register("password",{required:"Password required"})} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                  <p className='text-red-500'>{errors.password?.message}</p>
                    </div>
                    <div className='flex  justify-evenly'>
                   
                    <button type="button" onClick={()=>dispatch(Superadminactions.setModal(false))} className="w-24 py-2 text-white bg-zinc-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                    <button type="submit" className="w-28 py-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Adminadd}>Add Admin</button>
                    </div>
              </form>
            </div>
   </Modal>
)}
   </>
  )
}

export default Admins