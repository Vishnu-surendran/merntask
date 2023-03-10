import React from 'react'

function Modal({children}) {
  return (
    <div class="bg-slate-800 bg-opacity-50 flex  justify-center mt-8 items-center  absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-8 py-6 rounded-md text-center mt-10">
{children}
  </div>
</div>
  )
}

export default Modal