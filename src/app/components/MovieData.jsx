import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
const MovieData = (mve) => {
    // console.log(mve)
    // "logoImage": {
    //   "videoId": 70304189,
    //   "url": "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSJIEQ5O3358lRUNTyu9S5SC0Bmm0g0R0ODvarV8VcUcHTlJHmxj_cInT1oMz15wYxBSGy0Si4jCh81vFc8peW6-lKwzBgveudeTOeZoQHA.webp?r=5ea",
    //   "type": "LOGO_BRANDED_HORIZONTAL",
    //   "width": 625,
    //   "height": 250,
    //   "extension": "webp",
    //   "size": "_LOGO_BRANDED_HORIZONTAL",
    //   "imageKey": "LOGO_BRANDED_HORIZONTAL|569fe200-cf76-11e9-b852-0e5eb401023c|en"
    // },
    // "backgroundImage": {
    //   "videoId": 70304189,
    //   "url": "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcU04sqp-K3Q6kOSeigUpt61rZMYzIq69NqnXcMmMRDYA4RBWCbnRt7fZCbw7H6HaKLnLO7C34v79G2cUXbXPVtleLJ6h2MVk8YC.webp?r=ccc",
    //   "width": 848,
    //   "height": 477,
    //   "extension": "webp",
    //   "size": 480,
    //   "focalPoint": "{\"x\":0.5568,\"y\":0.4028}",
    //   "imageKey": "StoryArt|0ae68964-c128-11e3-946c-ab048f51b9bd|en"
    // }
    const {title , id , type , synopsis ,logoImage ,backgroundImage,availability} =  mve.jawSummary
    // return <MovieData key={mve.id} type={mve.type} title={mve.title} realseYear = {mve.releaseYear} description={mve.synopsisRegular} logo={mve.jawSummary.logoImage.url}  background={mve.jawSummary.backgroundImage.url}
    // "availability": {
    //   "isPlayable": true,
    //   "availabilityDate": "March 30",
    //   "availabilityStartTime": 1648623600000,
    //   "unplayableCause": null
    // },
  return (
    <>
     <div className="w-[300px]  drop-shadow-md shadow-xl rounded-lg p-2 mb-3  ">
        <Image src = {backgroundImage.url} width={200} height={200} alt={title} className=' bg-slate-500  w-full rounded-lg ' />
        <div className=" text-slate-700 font-semibold text-xl  ">{title}</div>
        <div className="flex flex-row  w-full justify-between items-center my-2">
  <div className="text-slate-400">{availability.availabilityDate}</div>
  <div className=""><Image src={logoImage.url}  width={40} alt={"logo"} height={40} className='w-[40px] h-[40px] rounded-full bg-slate-400 '/></div>
 </div>
        <div className="text-slate-500">{synopsis}</div>
        {/* <div className="">{n}</div> */}
<div className='flex justify-end'>
 <Link href={`/movie/${id}`} className='bg-purple-300 px-3 py-2 rounded-md hover:bg-black hover:text-purple-50 my-2 mx-3'>View More ..</Link> </div>
 
        </div> 
    </>
  )
}

export default MovieData
