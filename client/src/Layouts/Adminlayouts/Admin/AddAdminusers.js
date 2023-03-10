import React, { useEffect } from 'react'
import Admindashboard from '../Layout/AdminLayout'
import { useSelector,useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
import { Adminaction } from '../../../Store/Store'
import Modal from '../../Modal/Modal'
import Superadminlayout from '../Layout/Superadminlayout'
import Adminsauth from '../../../Auth/Adminsauth/Adminsauth'
import {useForm} from "react-hook-form"
function AddAdminusers() {
   const dispatch=useDispatch()
   const data=useLoaderData()
    const {status,Warning,modal,Adminusers,error}=useSelector((state)=>state.Adminmanagement)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {Adminuseradd,Adminusermanage}=Adminsauth()
    useEffect(() => {
    dispatch(Adminaction.Adminusers(data))
    }, [dispatch])
    
    const onSubmit=(data)=>{
dispatch(Adminuseradd(data))
    }
const Blockconfirm=(id)=>{
dispatch(Adminusermanage(id))
}
  return (
   <>
   <Admindashboard>
       <div id="main-content" className="h-full w-full mt-3 bg-gray-50 relative overflow-y-auto lg:ml-32">
          <main>
             <div className={`${status ? "ml-14":""} lg:pt-6 px-4 `}>
                <div className="w-full h-[32rem]">                
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Adminusers</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=>dispatch(Adminaction.setModal(true))}>+ Add</button>
        </div>
      </div>
    </div>

    {Adminusers && ( <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Adminuser name
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Products Added
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Action
                        </th>
          </tr>
        </thead>

        <tbody>
          
          {Adminusers?.map((adminuser)=>{
return  <tr>
<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
  {adminuser.username}
</th>
<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
{adminuser.username}
</td>
<td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  {adminuser.isActive ?<button className='bg-emerald-600 text-white px-1 py-1 rounded-sm'>Active</button> :   <button className='bg-red-600 text-white px-1 py-1 rounded-sm'>Inactive</button> }
</td>
<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  {adminuser.isBlocked ? <button className='bg-emerald-800 text-white rounded-sm px-2 py-1 mr-2' onClick={()=>Blockconfirm(adminuser._id)}>Unblock</button> : <button className='bg-red-600 text-white rounded-sm px-2 py-1'onClick={()=>Blockconfirm(adminuser._id)} >Block</button> }
</td>
</tr>
          })}
        </tbody>

      </table>
    </div>
    )}
   
  </div>                      
                     
           
                </div>
             </div>
          </main>
       
         
       </div>
 
{modal && (
   <Modal>
          
        {/*     <div class="px-6 py-6 lg:px-3">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Adminuser</h3>
                <form class="space-y-6" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    <p className='text-red'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                        <input type="password" {...register("password",{required:'password  required'})}placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        <p className='text-red'>{errors.password?.message}</p>
                    </div>
                    <div className='flex  justify-evenly'>
                     <div></div>
                    <button type="button"  class="w-24 py-2 text-white bg-zinc-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                    <button type="submit" class="w-28 py-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add adminuser</button>
                    </div>
              </form>
            </div> */}
                    
            
                    <div class="relative  px-5 bg-white">
                       <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Create Adminuser</h1>
                        <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal"> User Name</label>
                        <input type="text" {...register("name",{required:'Username required'})} class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                        <p className='text-red-500'>{errors.name?.message}</p>     
                       
                        <label for="password" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Password</label>
                        <div class="relative mb-5 mt-2">
                           
                            <input type="password" {...register("password",{required:'Password required'})} class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            <p className='text-red-500'>{errors.password?.message}</p>    
                        </div>
                        {error &&(<p className='text-red-500'>{error}</p>)}
                        <div class="flex items-center justify-start w-full mt-3">
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Create</button>
                            <button type='button' class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={()=>dispatch(Adminaction.setModal())}>Cancel</button>
                        </div>
                      
                        <button type='submit' class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" >
                           
                        </button>
                        </form>
                    </div>
            
           
   </Modal>
)}
   </Admindashboard>
   </>
  )
}

export default AddAdminusers