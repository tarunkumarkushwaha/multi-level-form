import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setmathefficiency } from '../app/features/userdataslice'

const MathComfert = ({ nextPage }) => {
  const [isdisabled, setIsdisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const dispatch = useDispatch()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsdisabled(false)
  };

  const nextpagehandler = () => {
    dispatch(setmathefficiency(selectedOption))
    nextPage()
  }

  const radioData = [
    {
      id: "option1",
      value: "Arithmetic",
      type: "Introductory",
    },
    {
      id: "option2",
      value: "Basic Algebra",
      type: "Foundational",
    },
    {
      id: "option3",
      value: "Intermediate Algebra",
      type: "Introductory",
    },
    {
      id: "option4",
      value: "Calculus Advanced",
      type: "Advanced",
    },
  ]
  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className='font-bold md:text-2xl text-xl text-gray-900'>What is your math comfort level?</h1>
        <h2 className='md:text-sm text-xs text-center md:m-3 m-1 text-gray-700'>Choose the highest level you feel confident in - you can always adjust later.</h2>
      </div>
      <div className="flex justify-center items-center">
        {radioData.map((item, i) => {
          return <div key={i}>
            <input
              type="radio"
              id={item.id}
              name="options"
              value={item.value}
              onChange={handleOptionChange}
            />
            <div><label className='label2 smooth-entry' htmlFor={item.id}>
              <div className='flex flex-col justify-center items-center'>
                <h2 className="">5 x 1 / 2</h2>
                <h2 className="font-bold text-gray-800">Arithmetic</h2>
                <h2 className='text-gray-500'>Introductory</h2>
              </div>
            </label></div>
          </div>
        })}

      </div>
      <div className="absolute sm:bottom-10 bottom-16 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button disabled={isdisabled} className={`p-2 ${!isdisabled ? "bg-black" : "bg-slate-400"} text-white px-10 rounded-lg`} onClick={nextpagehandler}>Continue</button>
      </div>
    </>
  )
}

export default MathComfert