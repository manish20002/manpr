import React from 'react';
import './home.css';
import img from './OIP.jpeg';


export default function home() {
  return (
    <>
      <div className='body'>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-10 py-5 items-center justify-center flex-col">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img}/>
              <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Manish Thirani</h1>
                <p class="mb-8 leading-relaxed">Hi, there Manish!!!.</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Resume</button>
                </div>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}
