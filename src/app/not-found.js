import Link from 'next/link'
 import Image from 'next/image'
export default function NotFound() {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
   <Image src={'/not-found.svg'} width={500} height={500}  className='h-auto w-[350px] md:w-[500px] lg:w-[670px] '/>
   <h1 className='font-bold text-2xl text-purple-400'>Go to home Page</h1>
   <Link href={'/'} className='text-lg text-purple-900 shadow-xl drop-shadow-md px-3 py-2 rounded-lg hover:bg-purple-600 hover:text-white'>Home page</Link>
   </div>
    </>
  )
}