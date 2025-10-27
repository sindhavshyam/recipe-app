import React, { useCallback, useContext, useState } from 'react'
import { RecipeContaxt } from '../Context/Contaxt'
import { useNavigate } from 'react-router-dom';

function Favorite() {
  const navigate = useNavigate()

  const [datas,setDatas] = useContext(RecipeContaxt);
  const favData = datas?.filter((items,index)=> items.favorite === true);


  const handleFavorite = (index) => {
    setDatas((prev) => {
      const update =  prev.map((item, idx) => {
        if (idx === index) {
          return { ...item, favorite : !item.favorite };
        }
        return item;
      });
      
      localStorage.setItem("recipe",JSON.stringify(update));
      console.log(update)
      return update
    
    });
  };
  

  return (
    <div className='w-full h-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5'>
      {favData && favData.length === 0 ? <h1 className='text-2xl text-center'>No Favorite Available</h1> : (
        favData?.map((items)=>{
          const originalIndex = datas.indexOf(items);
          return <div key={originalIndex} className="card shadow-2xl rounded-lg mx-4">
            <div className="img h-50 w-full overflow-hidden rounded-lg">
                <img className='h-full w-full object-cover' src={items.image} alt="" />
            </div>
            <div className='px-2'>
                <h2 className='text-3xl my-2 font-semibold'>{items.title}</h2>
                <p className='text-sm text-zinc-600'>{items.description}</p>
                <div className='flex justify-between'>
                  <button onClick={()=>{navigate(`/recipe-details/${originalIndex}`)}} className='px-6 py-3 bg-orange-600 rounded-lg text-sm my-3 font-semibold shadow-2xl text-white'>View Recipe</button>
                                  <button onClick={()=>handleFavorite(originalIndex)} className={`px-6 py-3 ${items.favorite ? "bg-red-500" : "bg-emerald-500"} rounded-lg text-sm my-3 font-semibold shadow-2xl text-white`}>{items.favorite ? "Remove Favorite" : "Add Favorite"}</button>

                </div>
            </div>
        </div>
        })
      )}
     
      
    </div>
  )
}

export default Favorite
