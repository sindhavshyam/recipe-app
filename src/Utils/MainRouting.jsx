import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ExploreRecipe from '../pages/ExploreRecipe'
import Favorite from '../pages/Favorite'
import CreateRecipe from '../pages/CreateRecipe'
import RecipeDetails from '../pages/RecipeDetails'
import Edit from '../pages/Edit'


function MainRouting() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/explore-recipe' element={<ExploreRecipe/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/recipe-details/:id' element={<RecipeDetails/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default MainRouting
