import React from 'react'
import '../footer/Footer.css'

function Footer() {
  return (
    <div>
      <div className="flex w-full bg-white border-t-lime-500 py-4 border-t-2 justify-start items-star">
        <div className='flex text-center gap-2 items-center w-full justify-center colorText'>
          <p>FarmaCO - Naturale <span>|</span></p> 
          <p>Dev - João Pedro</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer