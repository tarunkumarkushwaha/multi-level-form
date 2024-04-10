import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setintrest } from '../app/features/userdataslice'
import RadioGroup from './RadioGroup';

const Intrest = ({ nextPage }) => {
  const [isdisabled, setIsdisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const radioData = [
    {
      id: "option1",
      value: "Learning specific skills to advance my career"
    },
    {
      id: "option2",
      value: "Exploring new topics I'm interested in"
    },
    {
      id: "option3",
      value: "Refreshing my math foundations"
    },
    {
      id: "option4",
      value: "Exercising my brain to stay sharp"
    },
    {
      id: "option5",
      value: "Something else"
    },
  ]

  const dispatch = useDispatch()

  const nextpagehandler = () => {
    dispatch(setintrest(selectedOption))
    nextPage()
  }

return (
  <>
    <div className="flex flex-col justify-center items-center p-3">
      <h1 className='font-bold md:text-2xl text-xl text-gray-900'>Which are you most interested in?</h1>
      <h2 className='md:text-sm text-xs text-center md:m-3 m-1 text-gray-700'>Choose just one. This will help us get you started (but won't limit your experience).</h2>
    </div>
    <RadioGroup radioData={radioData} setSelectedOption={setSelectedOption} setIsdisabled={setIsdisabled} />
    <div className="absolute sm:bottom-10 bottom-16 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
      <button disabled={isdisabled} className={`p-2 ${!isdisabled ? "bg-black" : "bg-slate-400"} text-white px-10 rounded-lg`} onClick={nextpagehandler}>Continue</button>
    </div>
  </>
)
}

export default Intrest