import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='relative flex justify-center items-center h-auto '>
      <div className="contain w-1/3 min-w-[340px] max-w-1/2 h-[300]  mt-[-100px]  ">
   

      </div>
      <div className="image -z-10 opacity-70"><Image src={'/vv.png'} width={300} height={200} alt='footer' className='w-full h-auto absolute top-0 left-0' /></div>
    </div>
  )
}

export default Footer
