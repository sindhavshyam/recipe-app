import React, { useContext, useState } from 'react'
import { RecipeContaxt } from '../Context/Contaxt'
import { useNavigate } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

function ExploreRecipe() {

  
  const [datas,setDatas] = useContext(RecipeContaxt);
  const [fav,setFav] = useState()
  const navigate = useNavigate()


  const handleFavorite = (index) => {
    
      const updateData = (datas || []).map((item, idx) => {
        if (idx === index) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
  });
      
    setDatas(updateData)
    localStorage.setItem("recipe",JSON.stringify(updateData));
  }
  // console.log(datas)

  return (
    <div className='w-full h-auto py-10'>
      {/* <h1 className='text-2xl text-center'>No Recipe Available</h1> */}
        <h1 className='text-2xl md:text-[4vw] font-bold text-orange-600 text-center m-10'>Explore Recipes</h1>
       <div className="cards h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        {datas?.map((items,index)=>{
            return <div key={index} className="card shadow-2xl rounded-lg mx-4">
            <div className="img h-50 w-full overflow-hidden rounded-lg">
                <img className='h-full w-full object-cover' src={items.image} alt="" />
            </div>
            <div className='px-2'>
                <h2 className='text-3xl my-2 font-semibold'>{items.title}</h2>
                <p className='text-sm text-zinc-600'>{items.description}</p>
                <div className='flex justify-between'>
                  <button onClick={()=>{navigate(`/recipe-details/${index}`)}} className='px-6 py-3 bg-orange-600 rounded-lg text-sm my-3 font-semibold shadow-2xl text-white'>View Recipe</button>
                  <button onClick={()=>handleFavorite(index)} className={`px-6 py-3 ${items.favorite ? "bg-red-500" : "bg-emerald-500"} rounded-lg text-sm my-3 font-semibold shadow-2xl text-white`}>{items.favorite ? "Remove Favorite" : "Add Favorite"}</button>
                </div>
            </div>
        </div>
        })}
        
     </div>
    </div>
  )
}

export default ExploreRecipe
