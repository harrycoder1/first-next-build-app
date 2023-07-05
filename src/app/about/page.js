"use client";

import Image from "next/image"
export default function page(){
    return <>
    <div className="px-2 md:px-4 lg:px-6 xl:px-8 flex flex-col md:flex-row  justify-center items-center">
        <div className="left w-[100%] md:w-1/2 ">
           
    <h1 className=" text-purple-400 drop-shadow-lg text-2xl xl:text-5xl  font-extrabold md:text-3xl lg:text-4xl">About Us</h1>
       <p>hello this is the my about page</p>
       </div>
        <div className="right  w-[100%] md:w-1/2"><Image src="/about-us.svg" width={30} height={30} alt={"about us"} className="h-auto w-[380px] md:w-[450px] lg:w-[560px] xl:w-[700px]" /></div>

    </div>
    </>
}