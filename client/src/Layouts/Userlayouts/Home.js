import React, { useEffect } from 'react'
import { Link,useLoaderData } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Useractions } from '../../Store/Store'
import Userauth from '../../Auth/Userauth/Userauth'
function Home() {
    const dispatch=useDispatch()
    const data=useLoaderData()
    const {Cart,Userlogout}=Userauth()
const {products,message}=useSelector((state)=>state.Usermanagement)
    useEffect(() => {
      dispatch(Useractions.products(data))
    }, [dispatch])

    const Submit=async(id)=>{
dispatch(Cart(id))
    }

    const logout=()=>{
Userlogout()
    }
    
  return (
   <>
   {products && ( <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div className='flex justify-between'>
            <p>{message ? message:""} </p>
                <button onClick={logout} className='px-3 py-2 bg-indigo-800 text-white hover:bg-indigo-600 hover:border-indigo-800'>Logout</button></div>
           
            <div class="lg:flex lg:-mx-2">
        
           
            
            

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                  

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                       {products?.map((product)=>{
                           return  <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                           <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt"/>
                           <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Name :{product.productname}</h4>
                         
                           <p class="text-black">Description :{product.description}</p>
                           <p class="text-black">Category: {product.category}</p>
                           <p class="text-black">Rs{product.price}</p>
                           <p class="text-black">Discount :{product.discount}</p>
                           <p class="text-black">Total :{product.price-product.discount}</p>
                           <button onClick={()=>Submit(product._id)} class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                               <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                               </svg>
                               <span class="mx-1">Add to cart</span>
                           </button>
                           
                       </div>
                       })}
                    </div>
                </div>
            </div>
        </div>
    </section>)}
   </>
  )
}

export default Home