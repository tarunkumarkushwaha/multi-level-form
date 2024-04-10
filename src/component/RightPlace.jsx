import React from 'react'

const RightPlace = ({ nextPage }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div>
          image
        </div>
      <div className='flex flex-col justify-center items-center p-[15%]'>
        <h1 className='font-bold text-2xl text-gray-900'>You're in the right place</h1>
        <h2 className='text-sm text-gray-700 m-3 w-full max-w-96'>Brilliant gets you hands-on to help improve your professional
          skills and knowledge. You'll interact with concepts and solve
          fun problems in math, science, and computer science.</h2>
      </div>
      </div>
      <div className="absolute bottom-4 left-[45%] flex justify-center items-center">
        <button className='p-2 bg-black text-white px-10 rounded-lg' onClick={nextPage}>Continue</button>
      </div>
    </>
  )
}

export default RightPlace