"use client";

import axios from 'axios';
import Image from 'next/image';


import { notFound } from 'next/navigation'
 
async function fetchUser(id) {
    // const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://netflix54.p.rapidapi.com/title/details/',
      params: {
        ids: id,
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key':process.env.RAPID_KEY ,
        'X-RapidAPI-Host': process.env.RAPID_HOST
      }
    };
    
        const res = await axios.request(options);
  if (!res.data) {return undefined}
  return res.data
}
// export default async function Profile({ params }) {
//   const user = await fetchUser(params.id)
 
//   if (!user) {
//     notFound()
//   }
 
//   // ...
// }


export default async function page ({params}){
  const user = await fetchUser(params.id)
 
  if (!user) {
    notFound()
  }
 
 


// const {title } =  response.data[0].details
const {title ,tags ,cast ,creators ,availability,contextualSynopsis ,currentContextualSynopsis ,maturity,releaseYear,seasonCount,episodeTitle,logoImage ,backgroundImage ,directors,writers ,genres} = user[0].details
    return (<>
    <div className='flex justify-center items-center flex-col '>
<div className=' mx-2 md:mx-6 lg:mx-10 flex flex-col-reverse md:flex-row  mt-8 justify-center items-center '>

<div className='left  w-1/2'>
<h1 className='text-2xl font-semibold text-purple-400'>{title}</h1>

{
    (releaseYear || availability )?<div> 
    <span className='font-bold text-slate-700'>release year :</span> <span className='text-purple-300'>{availability.availabilityDate ? availability.availabilityDate :""}  {releaseYear?releaseYear:""}</span>
</div>:""
}

{/* for fetchingthe creators data */}
{
    (creators.length >0)?<div className='flex flex-row'>
    <span className='font-bold text-slate-700'>creators :</span>
    { creators?.map((crs)=>{
    return  <span key={crs.id}>{crs.name}</span>
   })}
</div>:""
}
{/* for fetchig the director data */}
{
    (directors.length >0)?<div className='flex flex-row'>
    <span className='font-bold text-slate-700'>directors :</span>
   { directors?.map((drs)=>{
    return  <span key={drs.id}>{drs.name}</span>
   })}
</div>:""
}
{/* for fetching the writer data */}
{
    (writers.length >0)?<div className='flex flex-row'>
    <span className='font-bold text-slate-700'>writers :</span>
   { writers?.map((drs)=>{
    return  <span key={drs.id}>{drs.name}</span>
   })}
</div>:""
}


<div className='description bg-purple-50 rounded-lg drop-shadow-md text-slate-500 mr-3 mt-2 p-2 md:3 lg:4'>
<p>{ currentContextualSynopsis.text?contextualSynopsis.text:""}</p>
<p>{(currentContextualSynopsis.text)? currentContextualSynopsis.text:""}</p>
</div>


</div>
<div className='right w-1/2 relative'>
    <Image src={backgroundImage.url} width={200} height={200} alt={title} className='w-[300px] md:w-[100%] h-auto ' />
</div>

</div>

{/* tags start here */}
<div>
<h3 className='text-purple-400 font-bold text-xl'>tags are :-</h3>
<div className='flex flex-row' >
{tags.map((tag)=>{
    return <div key={tag.id} className='px-3 py-2 m-2 bg-slate-100 text-gray-500 shadow-md'>{tag.name} </div>
})}
</div>
</div>
{/* seasion details */}
{
    seasonCount?<div >
    <span className='font-bold text-slate-700'>total Seasion</span>: <span className=' text-purple-400'>{seasonCount}</span>
</div> :""
}


{/* cast section */}

<h2 className='text-purple-400 font-bold text-xl'>Casts are : -</h2>
<div className='flex flex-row flex-wrap space-x-2 space-y-1 justify-center items-center'>
{cast.map((ct)=>{
    return <li key={ct.id} className='list-none px-3 py-2 bg-slate-200 text-gray-600 rounded-md'>{ct.name}</li>
})}


</div>

{/* for fetching the writer data */}

{
    (genres.length >0)?<div className='flex flex-col justify-center items-center'>

    <h3 className='text-purple-400 font-bold text-xl'>genres are :-</h3>
<div className='flex flex-row flex-wrap justify-center items-center'>
   { genres?.map((drs)=>{
    return  <div key={drs.id} className='px-3 py-2 m-2 bg-slate-100 text-gray-500 shadow-md'>{drs.name}</div>
   })}
   </div>
</div>:""

}
</div>

    </>)
}