import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setdescription } from '../app/features/userdataslice'
import RadioGroup from './RadioGroup'

const DescribesYou = ({ nextPage }) => {
  const [isdisabled, setIsdisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const radioData = [
    {
      id: "option1",
      value: "Student or soon to be enrolled",
      img:"/studenticon.png"
    },
    {
      id: "option2",
      value: "Professional pursuing a career",
      img:"/professional.png"
    },
    {
      id: "option3",
      value: "Parent of a school-age child",
      img:"/parenticon.png"
    },
    {
      id: "option4",
      value: "Lifelong learner",
      img:"/learner.png"
    },
    {
      id: "option5",
      value: "Teacher",
      img:'/teacher.png'
    },
    {
      id: "option6",
      value: "Others",
      img:"/other.png"
    },
  ]

  const dispatch = useDispatch()

  const nextpagehandler = () => {
    dispatch(setdescription(selectedOption))
    nextPage()
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-3 sm:mb-0 mb-6">
        <h1 className='font-bold md:text-2xl text-xl text-gray-900'>Which describes you best?</h1>
        <h2 className='md:text-sm text-xs text-center md:m-3 m-1 text-gray-700 '>This will help us personalize your experience.</h2>
      </div>
      <RadioGroup radioData={radioData} setSelectedOption={setSelectedOption} setIsdisabled={setIsdisabled} />
      <div className="absolute bottom-6 left-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
        <button disabled={isdisabled} className={`p-2 ${!isdisabled ? "bg-black" : "bg-slate-400"} text-white px-10 rounded-lg`} onClick={nextpagehandler}>Continue</button>
      </div>
    </>
  )
}

export default DescribesYou