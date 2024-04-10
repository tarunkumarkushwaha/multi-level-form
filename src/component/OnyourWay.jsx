import React from 'react'
import { useNavigate } from "react-router-dom";

const OnyourWay = ({ nextPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center p-32 smooth-entry">
        <div className='p-10'>image</div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold md:text-2xl text-xl text-gray-900 p-3'>You're on your way!</h1>
          <div>
            5 stars
          </div>
          <div className=' font-normal italic p-2 w-96'>
            <p>"Through its engaging and well-structured courses, Brilliant has taught me
              mathematical concepts that I previously struggled to understand. I now feel
              confident approaching both technical job interviews and real world problem
              solving situations."</p>
              <p>- Jacob S.</p>
          </div>
        </div>
      </div>
      <div className="absolute sm:bottom-10 bottom-16 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button className={`p-2 bg-black text-white px-10 rounded-lg`} onClick={() => navigate('/result')}>Continue</button>
      </div>
    </>
  )
}

export default OnyourWay