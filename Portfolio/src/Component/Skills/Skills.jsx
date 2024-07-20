import React from "react";
import Marquee from 'react-fast-marquee';

function Skills() {
  return (
    <div  
    className='w-full min-h-screen flex flex-col justify-center items-center bg-[#f1f1f1] text-zinc-700 font-["Regular"]'>
      <div className="w-[80%] flex flex-col">
        <div className="flex flex-col space-y-2 text-center mb-14">
          <span className='text-5xl font-["Regular"]'>Skills that I have.</span>
          <span className="text-2xl">
            These are the technologies I've worked with.
          </span>
        </div>
        <Marquee autoFill pauseOnClick speed={30} gradient={false}>
          <div className="bg-zinc-600 text-sky-400 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            Tailwind CSS
          </div>
          <div className="bg-[#333333] text-purple-500 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            BootStrap
          </div>
          <div className="bg-zinc-600 text-sky-500 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            React
          </div>
          <div className="bg-[#333333] text-orange-600 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            HTML
          </div>
          <div className="bg-zinc-600 text-blue-500 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            CSS
          </div>
          <div className="bg-[#333333] text-gray-600 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            Git / GitHub
          </div>
        </Marquee>
        <Marquee autoFill pauseOnClick direction="right" speed={30} gradient={false}>
          <div className="bg-zinc-600 text-green-500 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            Node.js
          </div>
          <div className="bg-[#333333] text-yellow-500 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            JavaScript
          </div>
          <div className="bg-zinc-600 text-red-600 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            Java
          </div>
          <div className="bg-[#333333] text-blue-800 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            C++
          </div>
          <div className="bg-zinc-600 text-yellow-300 rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            Python
          </div>
          <div className="bg-[#333333] text-[#4381a3] rounded-3xl m-2 flex space-x-5 p-4 font-['Regular'] text-2xl cursor-pointer hover:text-white hover:scale-105 transition duration-300 shadow-lg">
            C
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
