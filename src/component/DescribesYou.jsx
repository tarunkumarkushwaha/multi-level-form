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
      value: "Student or soon to be enrolled"
    },
    {
      id: "option2",
      value: "Professional pursuing a career"
    },
    {
      id: "option3",
      value: "Parent of a school-age child"
    },
    {
      id: "option4",
      value: "Lifelong learner"
    },
    {
      id: "option5",
      value: "Teacher"
    },
    {
      id: "option6",
      value: "Others"
    },
  ]

  const dispatch = useDispatch()

  const nextpagehandler = () => {
    dispatch(setdescription(selectedOption))
    nextPage()
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className='font-bold text-2xl text-gray-900'>Which describes you best?</h1>
        <h2 className='text-sm text-gray-700 m-3'>This will help us personalize your experience.</h2>
      </div>
      <RadioGroup radioData={radioData} setSelectedOption={setSelectedOption} setIsdisabled={setIsdisabled} />
      <div className="absolute bottom-4 left-[45%] flex justify-center items-center">
        <button disabled={isdisabled} className={`p-2 ${!isdisabled ? "bg-black" : "bg-slate-400"} text-white px-10 rounded-lg`} onClick={nextpagehandler}>Continue</button>
      </div>
    </>
  )
}

export default DescribesYou