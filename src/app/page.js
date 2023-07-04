import Image from 'next/image'
import Hero from './components/Hero'
import { Suspense } from 'react'
export default function Home() {
  return (
    <>
     {/* <Suspense fallback={<p>Loading feed...</p>}> */}
      
 
    <Hero />
    {/* </Suspense> */}
    </>
  )
}
