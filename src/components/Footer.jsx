import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    
      <div className="bg-[#061435] w-full h-auto flex flex-col items-center gap-10 md:gap-5 py-6 ">
      <h1 className="logo text-white text-center text-4xl font-semibold">Cook..</h1>
      <p className="text-white md:w-1/2 lg:w-1/4 text-center text-sm border-b pb-10 border-zinc-600 w-[80%]">
        From quick and easy meals to gourmet delights, we have something for
        every taste and occasion.
      </p>
     
       <div className="text-white text-sm flex gap-2 border-b md:border-none border-zinc-600 pb-4 ">
        <Link to="/about" className="list-none">About Us</Link>
        <Link to="explore-recipe" className="list-none">Recipe</Link>
        <Link to="/contact" className="list-none">Contact Us</Link>
      </div>
      <div className="text-white text-sm">
        <p>© 2025 Cook. All rights reserved.</p>
        <div className="flex gap-4 mt-4 justify-center">
          <FaFacebook color='white' size={18}/>
           <FaInstagram color='white' size={18}/>
            <FaTwitter color='white'size={18}/>
            <FaYoutube color='white'size={18}/>
        </div>
      </div>
     </div>
   
    
  );
}

export default Footer;
