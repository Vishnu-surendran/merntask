import React from 'react'

function Formlayout({children}) {
  return (
     
<>
<div className=" min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">

     {children}

</div>
</>
  )
}

export default Formlayout