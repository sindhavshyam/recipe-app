import React from "react";

function About() {
  return (
    <div className="w-full h-auto">
      <h1 className="text-4xl font-bold my-10 text-center">About <span className="text-orange-600">Cook..</span></h1>
      <div className="my-10 mx-6 rounded-lg bg-yellow-300 p-2 shadow-2xl">
        <h1 className="text-2xl text-orange-600">Well Come !</h1>
        <p className="text-sm my-2">
          Cook.. is a simple, clean, and fun app for storing and managing your
          recipes. Whether you’re cooking at home or sharing recipes with
          friends, this app is built to make your experience smooth and
          enjoyable.
        </p>
      </div>
      <div className="my-10 mx-6 rounded-2xl bg-yellow-300 p-6 shadow-2xl">
        <h1 className="text-2xl text-orange-600">✨ Key Features</h1>
        <div className="text-sm list-none my-2">
          <li>Create and save your own recipes</li>
          <li>Upload images to visualize your dish</li>
          <li>Edit and update anytime</li>
          <li>Delete recipes in one click</li>
          <li>Responsive design for mobile and desktop</li>
        </div>
      </div>
      <div className="my-10 mx-6 rounded-2xl bg-yellow-300 p-6 shadow-2xl">
        <h1 className="text-xl text-orange-600 my-2">👨‍💻 About the Developer</h1>
        <p className="text-sm my-2"><span className='font-bold text-sm'>Name :</span> Sindhav ShyamKumar Maheshbhai</p>
        <p className="text-sm my-2"><span className='font-bold text-sm'>Email :</span> sindhavs22@gmail.com</p>
        <p className="text-sm my-2"><span className='font-bold text-sm'>Qualification :</span> BCA (5<sup>th</sup> corrent semester) Silver Oak Univercity</p>
        <p className="text-sm my-2"><span className='font-bold text-sm'>Skills :</span> HTML, CSS, JAVASCRIPT, REACT JS, TAILWIND CSS</p>
      </div>
    </div>
  );
}

export default About;
