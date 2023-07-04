import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
    <>
     

      <div className="h-[300px]  w-1 bg-purple-600  absolute top-[200px] left-1/2 opacity-40 hidden md:block"></div>
    <div className="px-2 md:px-10 mt-4 flex flex-col md:flex-row w-[100vw] items-center justify-center mx-auto md:justify-between">

        <div className="left w-1/3">
<h1 className="text-5xl text-slate-500 drop-shadow-xl font-extrabold">Hello Wellcome <br /> My <span className="text-purple-500">WEBPAGE</span> </h1>
<p className="text-slate-400 text-lg my-4">Click below for View the Movies</p>
<button className="px-3 py-2 border-purple-600 text-purple-600 bg-purple-50"><Link href="/movie"> View More ...</Link></button>
        </div>
        <div className="right w-1/2 flex justify-center items-center">
        <Image src={'/vedio.svg'} width={300} height={300}  className="h-auto w-[330px] md:w-[450px] lg:w-[650px] "/> </div>
    </div>
  
    </>
  )
}
