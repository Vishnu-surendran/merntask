import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {UserIcon,EnvelopeIcon,HandRaisedIcon,ComputerDesktopIcon} from "@heroicons/react/24/solid"
import { NavLink,Link } from 'react-router-dom'
import { Adminaction, Superadminactions } from '../../../Store/Store'
import Adminsauth from '../../../Auth/Adminsauth/Adminsauth'
function Superadminlayout({children}) {
    const dispatch=useDispatch()
    const{Superadminlogout}=Adminsauth()
    const {status}=useSelector((state)=>state.Superadminmanagement)
    const Sidebar=()=>{
      dispatch(Superadminactions.statusChange(!status))
          }

          const logout=()=>{
Superadminlogout()
          }
  return (

  

  <>
 <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
       <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
             <div className="flex items-center justify-start">
                <button onClick={Sidebar} id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                   <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                   </svg>
                   <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                   </svg>
                </button>  
                <span className="self-center whitespace-nowrap">Windster</span>

                <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                   <label htmlFor="topbar-search" className="sr-only">Search</label>
                   <div className="mt-1 relative lg:w-64">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                         </svg>
                      </div>
                      <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                   </div>
                </form>
             </div>
             <div className="flex items-center">
                <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                   <span className="sr-only">Search</span>
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                   </svg>
                </button>
                <Link onClick={logout}  className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                   Logout
                </Link>
             </div>
          </div>
       </div>
    </nav>
  <div className="flex overflow-hidden bg-white pt-16">
       <aside id="sidebar" className={`fixed ${status? "":"hidden"} z-20 h-full w-auto top-0 left-0 pt-16  flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar"`}>
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
             <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                   <ul className="space-y-8 pb-2">
                      <li>
                         <form action="#" method="GET" className="hidden">
                            <label htmlFor="mobile-search" className="sr-only">Search</label>
                            <div className="relative">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                  </svg>
                               </div>
                               <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                            </div>
                         </form>
                      </li>
                      <li>
                      <NavLink to="/superadmin" className={({isActive})=> isActive ? " hidden text-base text-gray-900 font-normal rounded-l bg-gray-400 lg:flex items-center p-2 group ":" hidden text-base text-gray-900 font-normal rounded-lg  lg:flex items-center p-2 group " }>
                        
                        <span className="ml-2 flex-1 whitespace-nowrap font-semibold">Dashboard</span>
                     </NavLink>
                     <NavLink to="/superadmin" className={({isActive})=> isActive ? "bg-gray-400" :undefined} end >
                    <ComputerDesktopIcon className='ml-2 w-8 lg:hidden'/>
                    </NavLink>
                      </li>
                      <li >
                         <NavLink to="/superadmin/admins" className={({isActive})=> isActive ? " hidden text-base text-gray-900 font-normal rounded-l bg-gray-400 lg:flex items-center p-2 group ":" hidden text-base text-gray-900 font-normal rounded-lg  lg:flex items-center p-2 group " }>
                        
                            <span className="ml-2 flex-1 whitespace-nowrap font-semibold">Admins</span>
                         </NavLink>
                         <NavLink to="/superadmin/admins" className={({isActive})=> isActive ? "bg-gray-400" :undefined} >
                       <UserIcon className=' ml-2 w-8 lg:hidden'/>
                       </NavLink>
                      </li>
                      <li>
                         <NavLink to="/superadmin/inbox" className={({isActive})=> isActive ? " hidden text-base text-gray-900 font-normal rounded-l bg-gray-400 lg:flex items-center p-2 group ":" hidden text-base text-gray-900 font-normal rounded-lg  lg:flex items-center p-2 group " } end >
                           
                            <span className="ml-2 flex-1 whitespace-nowrap font-semibold">Inbox</span>
                         
                         </NavLink>
                         <NavLink to="/superadmin/inbox" className={({isActive})=> isActive ? "bg-gray-400" :undefined} >
                         <EnvelopeIcon className='ml-2 w-8 lg:hidden'/>
                         </NavLink>
                         <li><HandRaisedIcon onClick={logout} className='ml-2 mt-6 w-8 lg:hidden'/>
</li>                         
                      </li>                    
                   </ul>
                 
                </div>
             </div>
          </div>
       </aside>

   
       {children} 
    </div>
  </>
  )
}

export default Superadminlayout