import React from 'react'
import { useNavigate } from "react-router-dom";

const OnyourWay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center smooth-entry p-8 pt-10">
        <div >
          <img className='sm:h-48 h-40 sm:w-60 w-30 rounded-lg' src={"/onyourway.png"} alt="on your way" />
        </div>
        <div className='flex flex-col justify-center items-center p-[10%] smooth-entry'>
          <h1 className='font-bold md:text-2xl text-xl text-gray-900 p-2'>You're in the right place</h1>
          <div className='mx-auto p-2'>
            <img className='w-28' src="/star.png" alt="5 star" />
          </div>
          <h2 className='text-sm text-gray-700 md:m-3 m-6 p-2 w-full max-w-96 italic'>
            "Through its engaging and well-structured courses, Brilliant has taught me
            mathematical concepts that I previously struggled to understand. I now feel
            confident approaching both technical job interviews and real world problem
            solving situations."<br/>
            <span className='text-sm font-medium'>- Jacob S.</span>
          </h2>
        </div>
      </div>
      <div className="absolute bottom-6 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button className={`p-2 bg-black text-white px-10 rounded-lg`} onClick={() => navigate('/result')}>Continue</button>
      </div>
    </>
  )
}

export default OnyourWay