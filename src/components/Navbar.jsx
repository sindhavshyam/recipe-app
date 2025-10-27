import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiMenu3Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [open,setOpen] = useState(false)


  return (
    <>
    
    <div className='h-full w-full md:hidden'>
        <div className='h-20 w-full flex justify-between items-center border-b px-4'>
      <h1 className='logo text-4xl text-orange-600 font-bold'>Cook..</h1>
      {open ? <IoMdClose onClick={()=>{setOpen(!open)}} size={30} /> : <RiMenu3Fill onClick={()=>{setOpen(!open)}} size={30} />}
    </div>
    <div className={`h-screen w-full bg-white flex flex-col absolute items-center gap-10 py-10 ${open ? "block" : "hidden"} ease-in-out`}>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/" className='text-3xl list-none'>Home</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/about" className='text-3xl list-none'>About</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/explore-recipe" className='text-3xl list-none'>Explore Recipe</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/favorite" className='text-3xl list-none'>Favorite</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/contact" className='text-3xl list-none'>Contact</NavLink>

      
    </div>
   
    </div>
    
    {/* Desktop navbar */}
      <div className='hidden md:flex justify-between items-center px-4 border-b border-zinc-500 '>
         <h1 className='logo text-[5vw] text-orange-600 font-bold'>Cook..</h1>
        <div className={`h-20 w-full flex items-center justify-end gap-10 py-10`}>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/" className='text-[1.5vw] list-none hover:text-red-600'>Home</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/about" className='text-[1.5vw] list-none hover:text-red-600'>About</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/explore-recipe" className='text-[1.5vw] list-none hover:text-red-600'>Explore Recipe</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/favorite" className='text-[1.5vw] list-none hover:text-red-600'>Favorite</NavLink>
        <NavLink style={(e)=>{
          return{
            color : e.isActive ? "tomato":"",
            fontWeight : e.isActive ? 700 : ""
          }
        }} onClick={()=>{setOpen(false)}} to="/contact" className='text-[1.5vw] list-none hover:text-red-600'>Contact</NavLink>

      
    </div>
      </div>
   
    
     
    
    </>
    
  )
}

export default Navbar
