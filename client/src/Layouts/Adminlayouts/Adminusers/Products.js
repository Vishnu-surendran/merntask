import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Adminaction, Adminusersactions } from '../../../Store/Store'
import Modal from '../../Modal/Modal'
import Adminuserslayout from '../Layout/Adminuserslayout'
import { useLoaderData } from 'react-router-dom'
import {useForm} from "react-hook-form"
import Adminsauth from '../../../Auth/Adminsauth/Adminsauth'


function Products() {
   const dispatch=useDispatch()
   const {ProductAdd}=Adminsauth()
   const {register,handleSubmit,formState:{errors}}=useForm()
   const data=useLoaderData()
    const {status,error,modal,products}=useSelector((state)=>state.Adminusersmanagement)
useEffect(() => {
  dispatch(Adminusersactions.products(data))

 
}, [])


const onSubmit=(data)=>{
dispatch(ProductAdd(data))
}
   
  return (
   <>
   <Adminuserslayout>
       <div id="main-content" className="h-full w-full mt-3 bg-gray-50 relative overflow-y-auto lg:ml-32">
          <main>
             <div className={`${status ? "ml-14":""} lg:pt-6 px-4 `}>
                <div className="w-full h-[32rem]">
                  
                      
                      
 <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
  <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
    <a href="#" class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>

      <span class="self-center whitespace-nowrap text-xl font-semibold">Termcode</span>
    </a>
    <div class="mt-2 sm:mt-0 sm:flex md:order-2">
 
      <button type="button" class="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">Login</button>
      <button type="button" class="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg">Register</button>
    
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
      <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
        <li>
          <a href="#" class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">About</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Services</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="flex justify-evenly">
<h1 class="ml-4 text-2xl text-center font-bold text-gray-800">All Products</h1>
<button className='px-3 py-2 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-400' onClick={()=>dispatch(Adminusersactions.setModal(true))}> + Add Product</button>
</div>


{products && (<section class="py-10 ">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {products?.map((product)=>{
  return <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button class="text-sm">Add to cart</button>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700 mb-2">Name :{product.productname}</h2>
          <h2 class="text-slate-700 mb-2">Description :{product.description}</h2>
          <h2 class="text-slate-700 mb-2">Price :{product.price}</h2>
          <h2 class="text-slate-700 mb-2">Category :{product.category}</h2>
          <h2 class="text-slate-700 mb-2">Discount :{product.discount}</h2>
          <h2 class="text-slate-700 mb-2">Gst :{product.gst}</h2>
          {product.isSuperadminverified ? <h2 class="text-green-700 mb-2">Superadmin Verified</h2>:<h2 class="text-red-700 mb-2">Superadmin not Verified</h2>}
          {product.isAdminapproved ? <h2 class="text-green-700 mb-2">Admin Approved</h2>:<h2 class="text-red-700 mb-2">Admin not Approved</h2>}
          <div class="mt-3 flex items-end justify-between">
             
            
            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button class="text-sm">Add to cart</button>
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
   </Adminuserslayout>
   {modal && (
   <Modal>
                <div class="relative bg-white lg:w-[32rem] ">
                       <form onSubmit={handleSubmit(onSubmit)}>
                       <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-2">Add Product </h1>
                       <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Name</label>
                       <input type="text" {...register("name",{required:"This field is required"})} class="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                       <p className='text-red-600'>{errors.name?.message}</p>
                       
                       <div class="grid grid-cols-1 mt-2">
                       <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Description</label>
                           <input type="text" {...register("description",{required:"This field is required"})} class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"  />
                       <p className='text-red-600'>{errors.description?.message}</p>
                       </div>
                     
                       <div class="  mt-2">
                       <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Price</label>
                           <input type="number" {...register("price",{required:"This field is required"})} class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                           <p className='text-red-600'>{errors.price?.message}</p>
                       </div>
                      
                       <div class="relative mt-2">
                       <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Discount</label>
                           <input type="number" {...register("discount",{required:"This field is required"})} class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                           <p className='text-red-600'>{errors.discount?.message}</p>
                       </div>
                    
                       <div class="relative  mt-2">
                       <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Gst</label>
                           <input type="number" {...register("gst",{required:"This field is required"})} class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                           <p className='text-red-600'>{errors.gst?.message}</p>
                       </div>
                      
                       <div class="relative  mt-2">
                       <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Category</label>
                           <input type="text" {...register("category",{required:"This field is required"})} class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                           <p className='text-red-600'>{errors.category?.message}</p>
                       </div>
                       <div class="flex items-center justify-start w-full">
                           <button type='submit' class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                           <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={()=>dispatch(Adminusersactions.setModal(false))}>Cancel</button>
                       </div>
                          
                      </form>
                   </div>
   </Modal>
)}
   </>
  )
}

export default Products