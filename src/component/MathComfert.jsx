import React from 'react'

const MathComfert = ({ nextPage }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>What is your math comfort level?</h1>
        <h2>Choose the highest level you feel confident in - you can always adjust later.</h2>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h2 className="">5 x 1 / 2</h2>
          <h2 className="font-bold">Arithmetic</h2>
          <h2>Introductory</h2>
        </div>
        <div>
          <h2 className="">3x+5= 4</h2>
          <h2 className="font-bold">Basic Algebra</h2>
          <h2>Foundational</h2>
        </div>
        <div>
          <h2 className="">
            x=-b±√√b2-4ac/2a</h2>
          <h2 className="font-bold">Intermediate Algebra</h2>
          <h2>Intermediate</h2>
        </div>
        <div>
          <h2 className="">x²dx =?</h2>
          <h2 className="font-bold">Calculus</h2>
          <h2>Advanced</h2>
        </div>
      </div>
      <div className="absolute bottom-4 left-[45%] flex justify-center items-center">
        <button className='p-2 bg-black text-white px-10 rounded-lg' onClick={nextPage}>Continue</button>
      </div>
    </>
  )
}

export default MathComfert