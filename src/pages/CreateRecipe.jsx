import React, { useContext, useRef } from 'react'
import { RecipeContaxt } from '../Context/Contaxt';
import { Navigate, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';


function CreateRecipe() {
  const [datas,setDatas] = useContext(RecipeContaxt);

   const navigation  = useNavigate()

  
  

  const image = useRef(null);
  const title = useRef(null);
  const thef = useRef(null);
  const description = useRef(null);
  const Ingredients = useRef(null);
  const Instruction = useRef(null);
  
    const handlesumbit =  (event)=>{
      event.preventDefault();
      const obj = {
        image : image.current.value,
        title : title.current.value,
        thef : thef.current.value,
        description : description.current.value,
        Ingredients : Ingredients.current.value,
        Instruction : Instruction.current.value,
        favorite : false,
      }
     const show = localStorage.setItem("recipe",JSON.stringify([...datas,obj]));
     const newdata = JSON.parse(localStorage.getItem("recipe"));
     setDatas(newdata)
     
    
     navigation("/");
     
    }
    
      
   

  return (
    <div className='h-auto my-2 w-full'>
      <ToastContainer />
      <div className='flex justify-end px-2'>
        <button onClick={()=>navigation(-1)} className='text-sm text-white px-6 py-2 bg-orange-600 flex items-center gap-2 rounded-lg'><MdOutlineArrowBack size={20} /> GO Back</button>
      </div>
        <div className='px-6'>
        <h1 className='text-2xl font-semibold text-orange-600 text-center my-6 '>Create a Recipe</h1>
       <form onSubmit={handlesumbit}>
         <input ref={image} className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Image URL' />
        <input ref={title} className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Recipe Title' />
        <input ref={thef} className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Chef Name' />
        <textarea ref={description} className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Descrpition'></textarea>
        <textarea ref={Ingredients} className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Ingredients Seperated By Comma.'></textarea>
        <textarea ref={Instruction} className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Instruction'></textarea>
        <button type='submit'  className='shadow-2xl text-2xl px-6 py-2 text-white font-semibold rounded-lg bg-orange-600'>
            Add Recipe
        </button>
       </form>
        </div>
      
    </div>
  )
}

export default CreateRecipe
