'use client'
import Image from 'next/image'
import { useState } from 'react'


const page = () => {
  const [user , setUser] = useState({name:"" , email:"" , message:"" , phone:""})
  const [status ,setStatus] =useState(null)
  const handleChange=(e)=>{
    setUser((pre)=>({ ...pre , [e.target.name]:e.target.value}));
    console.log(user)
  }
  const handleSumbit=async(e)=>{
e.preventDefault();
try{
const responce = await fetch('api/contact',{
method:"POST",
headers:{"Content_Type":"application/json"},
body:JSON.stringify({
  username:user.name ,
  email:user.email ,
  phone:user.phone,
  message:user.message
})

})


if(responce.status ===200){
  setUser({
    name:"",
    email:"",
    phone:"",
    message:""
  })
setStatus('success')
}
else{
setStatus("error")
}


}catch(e){
console.log(e)
}

  }
  
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='left w-fit md:w-1/2'>
          <Image  src={'/contact-us.svg'} width={30} height={30} alt='Contact us' className='h-auto w-[380px] md:w-[450px] lg:w-[560px] xl:w-[700px]'/>
        </div>
        <div className='right w-fit md:w-1/2'>
      <h1 className='text-center text-slate-400 drop-shadow-lg text-2xl xl:text-6xl  font-extrabold md:text-3xl lg:text-4xl'>Welcome to Join <br /><span className='text-purple-500'>Contact me</span></h1>
          
           <form  onSubmit={handleSumbit} className='flex justify-center items-center flex-col  p-8 '>
        <div className='justify-start'>
        <div className="my-4">
<label htmlFor="name" className='text-sm text-purple-800 px-2 py-1 bg-purple-300 opacity-30 rounded-lg'>Enter your name</label><br />
<input id='name' name='name' className='bg-slate-100 px-3 py-3  focus:outline-none focus-within:outline-none focus-visible:outline-none focus:shadow-2xl rounded-lg  w-[300px] lg:w-[470px]' type="text"placeholder='ex:harry hedau'  value={user.name} onChange={handleChange} />
</div>
<div className="my-4">
<label htmlFor="email" className='text-sm text-purple-800 px-2 py-1 bg-purple-300 opacity-30 rounded-lg'>Enter your Email</label><br />
<input id='email' name='email' className='bg-slate-100 px-3 py-3  focus:outline-none focus-within:outline-none focus-visible:outline-none focus:shadow-2xl rounded-lg  w-[300px] lg:w-[470px]' type="text"placeholder='ex:exmple@abc.com' value={user.email} onChange={handleChange} />
</div>


<div className="my-4">
<label htmlFor="phone" className='text-sm text-purple-800 px-2 py-1 bg-purple-300 opacity-30 rounded-lg'>Enter your Number</label><br />
<input id='phone' name='phone' className='bg-slate-100 px-3 py-3  focus:outline-none focus-within:outline-none focus-visible:outline-none focus:shadow-2xl rounded-lg  w-[300px] lg:w-[470px]' type="text"placeholder='ex:80XXXXX213' value={user.phone} onChange={handleChange} />
</div>

<div className="my-4">
<label htmlFor="message" className='text-sm text-purple-800 px-2 py-1 bg-purple-300 opacity-30 rounded-lg'>Enter your Message</label><br />
<textarea id='message' className='bg-slate-100 p-2  focus:outline-none focus-within:outline-none focus-visible:outline-none focus:shadow-2xl rounded-lg  w-[300px] lg:w-[470px]  ' name='message' type="text"placeholder='ex:hello Im from.....' cols={20} rows={3} value={user.message} onChange={handleChange} />
</div>
<div>
{status==="success"?<p className='text-sm  font-semibold text-green-400 drop-shadow-md bg-green-50 px-3 py-2 rounded-md'>data saved SuccessFully</p>:""}
{status==="error"?<p className='text-sm font-semibold text-red-400 drop-shadow-md  bg-red-50 px-3 py-1 rounded-md'>data not saved! </p>:""} </div>
<button className='mt-2 bg-purple-500 text-purple-100 hover:bg-green-700 hover:text-green-100 px-4 py-2 rounded-lg drop-shadow-xl hover:shadow-2xl'>Submit</button>
</div>
      </form></div>
      </div>
    </div>
  )
}

export default page
