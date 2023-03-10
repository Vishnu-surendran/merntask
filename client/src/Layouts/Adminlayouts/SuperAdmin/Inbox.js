import React ,{useEffect}from 'react'
import Superadminlayout from '../Layout/Superadminlayout'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../Modal/Modal'
import { useLoaderData } from 'react-router-dom'
import { Adminaction,Adminusersactions, Superadminactions } from '../../../Store/Store'
import Adminsauth from '../../../Auth/Adminsauth/Adminsauth'
function Inbox() {
    const dispatch=useDispatch()
    const data=useLoaderData()
    const {Productverify}=Adminsauth()
    const {products,status,Warning}=useSelector((state)=>state.Superadminmanagement)
    useEffect(() => {
        dispatch(Superadminactions.products(data))
    }, [])
          const Superadminapproved=products?.filter((product)=>!product.isSuperadminverified )
const Productapprove=(id)=>{
dispatch(Productverify(id))
}

  return (
  <Superadminlayout>
      <div id="main-content" className="h-full w-full mt-3 bg-gray-50 relative overflow-y-auto lg:ml-32">
          <main>
             <div className={`${status ? "ml-14":""} lg:pt-6 px-4 `}>
                <div className="w-full h-[32rem]">           
 

{Superadminapproved?.length===0 && (<div class="flex justify-evenly">
<h1 class="ml-4 text-2xl text-center font-bold text-gray-800">No Approvals Pending</h1>
</div>)}



{Superadminapproved && (<section class="py-10 ">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {Superadminapproved?.map((product)=>{
  return <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button class="text-sm">Approve</button>
          </div>
        </div>
        <div class="mt-1 p-2">
          <h2 class="text-slate-700 mb-2">Name :{product.productname}</h2>
          <h2 class="text-slate-700 mb-2">Description :{product.description}</h2>
          <h2 class="text-slate-700 mb-2">Price :{product.price}</h2>
          <h2 class="text-slate-700 mb-2">Category :{product.category}</h2>
          <h2 class="text-slate-700 mb-2">Discount :{product.discount}</h2>
          <h2 class="text-slate-700 mb-2">Gst :{product.gst}</h2>
       
          <div class="mt-3 flex items-end justify-between">
             
            
            <div class="flex items-center space-x-1.5 rounded-lg bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              

              <button class="text-sm " onClick={()=>Productapprove(product._id)}>Approve</button>
            </div>
          </div>
        </div>
      </a>
    </article>
  }) }  
   
 
    </div>
</section>)}           
                </div>
             </div>
          </main>
       </div>
       {Warning && (
               <Modal>
                      <h1 class="text-xl mb-4 font-bold text-slate-500">Are you sure ?</h1>
    <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white" onClick={()=>dispatch(Adminaction.setWarning())}>Cancel</button>
    <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Ok</button>
               </Modal>

                )}
  </Superadminlayout>
  )
}

export default Inbox