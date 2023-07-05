"use client";
import axios from 'axios';
import dot from 'dotenv'
dot.config()

import MovieData from '../components/MovieData';
import { Suspense, useEffect ,useState } from 'react';
const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/search/',
  params: {
    query: 'stranger',
    offset: '0',
    limit_titles: '50',
    limit_suggestions: '20',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key':process.env.RAPID_KEY ,
    'X-RapidAPI-Host': process.env.RAPID_HOST
  }
};


let response=[]
export default async function  page() {
  console.log(process.env.RAPID_KEY)
// const [d , setD] =useState([])
  // useEffect(()=>{
    // const fetches=async()=>{
      if(response.length===0){
        response = await axios.request(options);
  // setD(de)
      }
      const d = response.data.titles; 

    // }
  // fetches();
//  },[])
   
   


  return (
    <div>
      <h1 className='text-2xl text-purple-500 drop-shadow-lg font-bold text-center '> All Content here :-</h1>
      <div className='flex justify-center items-center'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
<Suspense fallback={<h1 className='text-4xl text-red'></h1>}>
      {
      await d?.map((mve)=>{
        return <MovieData key={mve.id} {...mve} />

      })
    }
    </Suspense>
    </div>
</div>
</div>

  )
}
