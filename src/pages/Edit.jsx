import React, { useContext, useRef } from 'react'
import { RecipeContaxt } from '../Context/Contaxt'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate()
    const {id} = useParams();
    const index = parseInt(id)
    const [datas,setDatas] = useContext(RecipeContaxt);
    const filtered = datas?.filter((items,idx)=> idx === index)[0]
    
    const image = useRef(null);
    const title = useRef(null);
    const thef = useRef(null);
    const description = useRef(null);
    const Ingredients = useRef(null);
    const Instruction = useRef(null);


    const handleEdit = (e)=>{
        e.preventDefault();
        const obj={
            image: image.current.value,
            title: title.current.value,
            thef: thef.current.value,
            description: description.current.value,
            Ingredients: Ingredients.current.value,
            Instruction: Instruction.current.value,
            favorite: false,
        }
        const editdata = datas.map((items,idx)=>{
            if(idx === index) return {...items, ...obj}
            return items
        
        })
        setDatas(editdata)
        localStorage.setItem("recipe",JSON.stringify(editdata));
        navigate(`/recipe-details/${index}`)
        // console.log(editdata)

        
    
    

    }


  return (
    <div className='p-4'>
        <p className='text-center text-2xl font-bold text-orange-600 my-4'>Edit Recipe</p>
      <form onSubmit={handleEdit}>
        <input ref={image} defaultValue={filtered?.image}  className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Image URL' />
        <input ref={title} defaultValue={filtered?.title}  className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Recipe Title' />
        <input ref={thef} defaultValue={filtered?.thef}  className='h-13 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' type="text" placeholder='Enter Chef Name' />
        <textarea ref={description} defaultValue={filtered?.description}  className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Descrpition'></textarea>
        <textarea ref={Ingredients} defaultValue={filtered?.Ingredients}  className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Ingredients Seperated By Comma.'></textarea>
        <textarea ref={Instruction} defaultValue={filtered?.Instruction}  className='h-15 py-1 border text-lg px-2 rounded-lg my-2 border-orange-600 w-full' placeholder='Enter Instruction'></textarea>
        <div className='flex justify-between'>
          <button type='submit' className='shadow-2xl text-sm px-6 py-2 text-white font-semibold rounded-lg bg-orange-600'>
            Edit Recipe
        </button>
          <button onClick={()=>{navigate(-1)}} className='shadow-2xl text-sm px-6 py-2 text-white font-semibold rounded-lg bg-emerald-600'>
            Go Back
        </button>
        </div>
       </form>
    </div>
  )
}

export default Edit
