import React from 'react'
import AdminLayout from '../../../Layouts/Adminlayouts/Layout/AdminLayout'
import { useSelector} from 'react-redux'
function Admindashboard() {
  const status=useSelector((state)=>state.Adminmanagement.status)
  return (
 <AdminLayout>
         <div id="main-content" className="h-full w-full mt-3 bg-gray-50 relative overflow-y-auto lg:ml-32">
          <main>
             <div className={`${status ? "ml-14":""} lg:pt-6 px-4 `}>
                <div className="w-full h-[32rem]">
                   <div className="bg-white shadow rounded-lg flex justify-center h-96">
                      <div className="flex items-center justify-center mb-4">
                         <div>
                         <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Hello Admin</span>
                            <h3 className="text-base font-normal text-gray-500 ml-5">Sales this week</h3>
                         </div>
                            
                        
                     
                      </div>
                    
                   </div>
                </div>
             </div>
          </main>
       
       
       </div>
 </AdminLayout>
  )
}

export default Admindashboard