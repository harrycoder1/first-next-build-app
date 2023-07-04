'use client' // Error components must be Client Components
 import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <div className='flex flex-col items-center justify-end'>
      <h2 className='font-extrabold text-2xl text-slate-400 drop-shadow-md '>Something went wrong <br/> by <span className='text-purple-500'> Movie Page!</span></h2>
      <Image src="/to-many-request.svg" width={30} height={30} className='h-auto w-[390px] md:w-[450px] lg:[w-750px] ' />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='px-3 py-2 font-semibold text-purple-500 bg-slate-200 rounded-lg hover:bg-purple-500 hover:text-white'
      >
        Try again
      </button>
    </div>
    </div>
  )
}