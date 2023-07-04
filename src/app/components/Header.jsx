"use client"
import React ,{useState} from 'react'
import Link from 'next/link'
import {GiHamburgerMenu}  from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
export default function Header(props) {
  const[showmore ,setShowmore] =useState(false) ;
  return (
    <>
<nav className=' w-full flex flex-col lg:flex-row justify-between items-center  bg-purple-500 drop-shadow-lg   fixed z-10'>

  <div className='flex flex-row justify-start w-fit'>
  <div><span className='text-purple-100 px-2 md:px-4 font-extrabold  '>{props.name}</span></div>
   <button 
   onClick={()=>setShowmore((pre)=>!pre)}
   className='text-white px-3 md:px-5 text-2xl lg:hidden'>{showmore?<AiOutlineClose/>: <GiHamburgerMenu />}</button></div>

 
  <div className='flex px-2 md:px-10 flex-col items-center'>
    {showmore?(<ul className=' flex justify-start flex-col  lg:hidden  w-full space-x-4  py-4 text-purple-200 font-semibold ' >
      <li></li>
      <li ><Link href='/' className={`hover:underline `}  >Home</Link> </li>
<li><Link href='/about' className='hover:underline'>About</Link> </li>
    <li><Link href='/movie' className='hover:underline'>Movie</Link> </li>
    <li><Link href='/contact' className='hover:underline'>Contact</Link> </li>
    </ul>):""}
    </div>
    <div className="hidden lg:block  ">
<ul className='flex px-2 md:px-10 items-center  w-full space-x-4 justify-end py-4 text-purple-200 font-semibold '>
<li> </li>
<li ><Link href='/' className={`hover:underline `}  >Home</Link> </li>
<li><Link href='/about' className='hover:underline'>About</Link> </li>
    <li><Link href='/movie' className='hover:underline'>Movie</Link> </li>
    <li><Link href='/contact' className='hover:underline'>Contact</Link> </li>
  
</ul>
</div>


</nav>
<div className='h-[60px]'></div>
    </>
  )
}
