"use client";

import Image from "next/image"
export default function page(){
    return <>
    <div className="px-2 md:px-4 lg:px-6 xl:px-8 flex flex-col md:flex-row  justify-center items-center">
        <div className="left w-[100%] md:w-1/2 ">
           
    <h1 className=" text-purple-400 drop-shadow-lg text-2xl xl:text-5xl  font-extrabold md:text-3xl lg:text-4xl">About Us</h1>
            <p className="text-slate-500">Welcome to MovieMagic, your ultimate destination for all things movies! We are a premier online platform dedicated to providing you with the latest updates, information, and a seamless movie ticket booking experience.</p>
            <p className="text-slate-500">
At MovieMagic, we understand the magic and excitement that movies bring into our lives. Our mission is to create a virtual haven for movie enthusiasts, where they can explore a vast collection of movies, discover new releases, and make informed choices about their cinematic experiences.</p>
<p className="text-slate-500">
Our movie pages are designed to provide you with detailed descriptions, trailers, ratings, and reviews, allowing you to make informed decisions before purchasing tickets. Whether you're a fan of action-packed blockbusters, heartwarming dramas, or captivating documentaries, MovieMagic has got you covered.</p>
        </div>
        <div className="right  w-[100%] md:w-1/2"><Image src="/about-us.svg" width={30} height={30} alt={"about us"} className="h-auto w-[380px] md:w-[450px] lg:w-[560px] xl:w-[700px]" /></div>

    </div>
    </>
}