import React from 'react'

const RightPlace = ({ nextPage }) => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center smooth-entry p-8 pt-20">
        <div className='mx-8'>
          <img className='sm:h-72 h-36 sm:w-72 w-36 rounded-lg' src={"/right place.jpg"} alt="right place" />
        </div>
      <div className='flex flex-col justify-center items-center mx-8 p-[5%] smooth-entry'>
        <h1 className='font-bold md:text-2xl text-xl text-gray-900'>You're in the right place</h1>
        <h2 className='text-sm font-medium text-gray-700 md:m-3 m-6 w-full max-w-96'>Brilliant gets you hands-on to help improve your professional
          skills and knowledge. You'll interact with concepts and solve
          fun problems in math, science, and computer science.</h2>
      </div>
      </div>
      <div className="absolute bottom-6 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button className='p-2 bg-black text-white px-10 rounded-lg' onClick={nextPage}>Continue</button>
      </div>
    </>
  )
}

export default RightPlace