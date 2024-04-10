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
      formula:<>5 x 1 /2 = ?</>
    },
    {
      id: "option2",
      value: "Basic Algebra",
      type: "Foundational",
      formula:<>3x + 5 = 4</>
    },
    {
      id: "option3",
      value: "Intermediate Algebra",
      type: "Introductory",
      formula:<>x = (-b ± √(b<sup>2</sup> - 4ac)) <hr /> <span className='ml-16'>(2a)</span></>
    },
    {
      id: "option4",
      value: "Calculus Advanced",
      type: "Advanced",
      formula:<>x = dx<sup>2</sup> + dx + 2 = 10 </>
    },
  ]
  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className='font-bold md:text-2xl text-xl text-gray-900'>What is your math comfort level?</h1>
        <h2 className='md:text-sm text-xs text-center md:m-3 m-1 text-gray-700'>Choose the highest level you feel confident in - you can always adjust later.</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
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
              <div className='flex flex-col sm:h-28 h-24 justify-between items-center'>
                <h2 className="text-sm">{item.formula}</h2>
                <div>
                <h2 className="text-center font-bold text-gray-800">{item.value}</h2>
                <h2 className='text-center  text-gray-500'>{item.type}</h2>
                </div>
              </div>
            </label></div>
          </div>
        })}

      </div>
      <div className="absolute sm:bottom-6 bottom-0 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button disabled={isdisabled} className={`p-2 ${!isdisabled ? "bg-black" : "bg-slate-400"} text-white px-10 rounded-lg`} onClick={nextpagehandler}>Continue</button>
      </div>
    </>
  )
}

export default MathComfert