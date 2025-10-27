import React, { useContext, useEffect } from 'react'
import logo from '../assets/hero.png'
import { Link, Links, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import Contaxt, { RecipeContaxt } from '../Context/Contaxt'

function Home() {

    const navigate = useNavigate()

    const [datas,setDatas] = useContext(RecipeContaxt);
    // console.log(datas)
    

        // const data =[
        //     {image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", title:"Pizza",description:"Pizza is a delicious Italian dish made with a round, flat base of dough topped with tomato sauce, cheese, and various toppings like vegetables, meat, or herbs, then baked to perfection.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},
            
        //     {image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=999", title:"Berger",description:"A burger is a juicy patty of grilled meat or vegetables served inside a soft bun with cheese, lettuce, tomato, and sauces — a perfect mix of flavor and crunch.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},

        //     {image: "https://media.istockphoto.com/id/1166678093/photo/spaghetti-with-tomato-sauce-shot-on-rustic-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=erpXXws4jgkKoywObeqOWAltGLdI8FMWsLBB1tHdTyk=", title:"noodles",description:"Soft, flavorful noodles cooked to perfection and tossed with vegetables, sauces, and spices for a delicious, satisfying meal.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},

        //     {image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", title:"Fries",description:"Crispy, golden, and perfectly salted potato fries — a classic snack that pairs well with any meal.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},

        //     {image: "https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhc3RhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", title:"pasta",description:"Delicious, creamy, and full of flavor — pasta cooked to perfection and tossed in a rich sauce with herbs and cheese.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},

        //     {image: "https://media.istockphoto.com/id/2173847455/photo/dabeli-a-spicy-indian-street-food-made-with-a-potato-filling-tamarind-chutney-and-sev-served.webp?a=1&b=1&s=612x612&w=0&k=20&c=ijQYZwZt8p9MgsXcze5FSUBiZJGu452LNGO25aVanHE=", title:"Dabeli",description:"Dabeli is a spicy and tangy Indian street food snack made with mashed potato filling inside a bun, topped with pomegranate, peanuts, and chutneys.",thef : "hello world",Ingredients:"helllo world",Instruction:"hello",favorite:false},
        // ]
        // const  setData = ()=>{
        //     localStorage.setItem("recipe", JSON.stringify(data));
        // }
        // useEffect(()=>{
        //     setData();
        // })
    

  return (
    <div>
        <div className="main h-auto md:flex md:gap-20 md:m-10">
            <div className='w-full h-full'> 
            <img className='w-full object-fit' src={logo} alt="" />
            </div>
            <div className='w-full h-auto my-10 md:mt-5 px-10 flex flex-col items-center'>
            <h2 className='text-2xl md:text-[3vw] text-center font-bold'>Cook Like a Pro With <br /> Our <span className='text-orange-500'>Easy</span> and <span className='text-orange-500'>Tasty</span> Recipes.</h2>
            <p className='text-zinc-500 my-20 md:my-5 text-center text-lg md:text-[2vw]'>From quick and easy meals to gourmet delights, we have something for every test and occasion.</p>
            <Link to="create-recipe" className='px-6 md:px-4 py-4 md:py-2 bg-orange-500 text-lg md:text-[1.5vw] text-white rounded-lg'>Create Recipe</Link></div>
        </div>
        {/* Featured products */}
    <div className="container h-full w-full mx-auto">
      <h4 className='font-bold text-center text-4xl'>Featured <span className='text-orange-600'>Recipes</span></h4>
     <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 md:m-10">
        {datas?.map((items,index)=>{
            return <div key={index} className="card shadow-2xl rounded-lg mx-4">
            <div className="img h-50 w-full overflow-hidden rounded-lg">
                <img className='h-full w-full object-cover' src={items.image} alt="" />
            </div>
            <div className='px-2'>
              <div>
                
                 <h2 className='text-3xl my-2 font-semibold'>{items.title}</h2>
                <p className='text-sm text-zinc-600'>{items.description}</p>
              </div>
               
                <button onClick={()=>{navigate(`/recipe-details/${index}`)}} className='px-6 py-3 bg-orange-600 rounded-lg text-[1vw] my-3  font-semibold shadow-2xl text-white'>View Recipe</button>
            </div>
        </div>
        })}
        
     </div>
    </div>
    </div>
  )
}

export default Home
