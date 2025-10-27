import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { RecipeContaxt } from "../Context/Contaxt";

function RecipeDetails() {
    const navigate = useNavigate()
    const {id} = useParams()
    const index = parseInt(id);
   
        //some error
    const [datas,setDatas] = useContext(RecipeContaxt)
    const [RecipeDetails,SetRecipeDetails] = useState(null);

    const getSeperate = ()=>{
        if(!datas) return;
        const Seperate = datas.filter((e,i)=> i === index)
        SetRecipeDetails(Seperate[0])
        
    }
    const handleDelete = (idx)=>{
      const deletedata = datas.filter((items,i)=> i != idx )
      setDatas(deletedata)
      localStorage.setItem("recipe",JSON.stringify(deletedata))
      navigate("/")
      // console.log(deletedata)
    }
    
    useEffect(()=>{
        getSeperate();
    },[datas,id])
    // console.log(RecipeDetails)



  return (
    <div className="w-full h-auto">
      {RecipeDetails ? <>
      <div className="flex items-center justify-between my-2 px-2">
        <h1 className="text-2xl font-bold">{RecipeDetails.title}</h1>
        <button onClick={()=>{navigate(-1)}} className="px-6 py-3 bg-orange-600 text-sm rounded-lg text-white ">
          Go Back
        </button>
      </div>
      <div className="h-50 w-full px-2 my-2 shadow-2xl">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={RecipeDetails.image}
          alt=""
        />
      </div>
      
      <div className="h-auto w-full px-2 my-2">
       <div>
         <p className="text-lg font-semibold">Title : :</p>
        <div className="w-full h-auto p-2 my-2 rounded-lg bg-zinc-300">
          <p className="text-sm">
            {RecipeDetails.title}
          </p>
        </div>
         <p className="text-lg font-semibold">Chef Name :</p>
        <div className="w-full h-auto p-2 my-2 rounded-lg bg-zinc-300">
          <p className="text-sm">
            {RecipeDetails.thef}
          </p>
        </div>
         <p className="text-lg font-semibold">Description :</p>
        <div className="w-full h-auto p-2 my-2 rounded-lg bg-zinc-300">
          <p className="text-sm">
            {RecipeDetails.description}
          </p>
        </div>
         <p className="text-lg font-semibold">Ingredients :</p>
        <div className="w-full h-auto p-2 my-2 rounded-lg bg-zinc-300">
          <p className="text-sm">
            {RecipeDetails.Ingredients}
          </p>
        </div>
         <p className="text-lg font-semibold">Instruction :</p>
        <div className="w-full h-auto p-2 my-2 rounded-lg bg-zinc-300">
          <p className="text-sm">
            {RecipeDetails.Instruction}
          </p>
        </div>
       </div>



       {/* button section  */}
        <div className="flex justify-between p-4 ">
          <button onClick={()=>navigate(`/edit/${index}`)} className="px-8 py-2 bg-emerald-600 text-white rounded-lg font-semibold">Edit</button>
          <button onClick={()=>handleDelete(index)} className="px-8 py-2 bg-red-600 text-white rounded-lg font-semibold">Delete</button>
        </div>
      </div>
      </> : <></>}
    </div>
  );
}

export default RecipeDetails;
