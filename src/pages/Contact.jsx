import React from 'react'

function Contact() {
  return (
    <div className='w-full md:w-1/2 md:flex md:mx-auto h-auto flex items-start my-10 px-2 '>
      <div className='flex flex-col justify-center items-center w-full h-auto border border-zinc-300 shadow-2xl rounded-2xl gap-10 p-10'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
         <form action="">
         <div className='flex flex-col gap-5 md:mx-auto'>
          <input className='text-lg px-2 py-2 h-10 border rounded-lg' type="text" required placeholder='Enter Your Name' />
          <input className='text-lg px-2 py-2 h-10 border rounded-lg' type="Email" required placeholder='Enter Your Email' />
         <textarea rows={30} cols={22} className='text-lg h-25 px-2 py-2 border rounded-lg' required placeholder='Enter Your Massage..'></textarea>
         <button className='text-lg px-6 py-2 rounded-lg bg-orange-600 text-white border border-orange-800 shadow-2xl'>Sumbit</button>
         </div>
         </form>
      </div> 
    </div>
  )
}

export default Contact
