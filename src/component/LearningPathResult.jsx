import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const LearningPathResult = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    // setloading(false)
    let load = setTimeout(() => { setloading(false) }, 2000)
    return () => {
      clearTimeout(load)
    }
  }, [])

  return (
    <>
      {loading ? <Loading /> :
        <div>
          <div className="flex flex-col justify-center items-center pt-[15%] sm:mb-7 mb-20">
            <h1 className='font-bold md:text-3xl text-xl text-gray-900'>Learning paths based on your answers</h1>
            <h2 className='md:text-sm text-xs text-center md:m-3 m-1 text-gray-700'>Choose one to get started. You can switch anytime.</h2>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center'>
            <div className='flex justify-center items-center border border-gray-400 rounded-md p-4 w-80 m-3'>
              {/* <p>MOST POPULAR</p> */}
              <p className='font-medium'><span className='font-bold'>Foundational Math </span>Build your foundational skills in algebra, geometry, and probability.</p>
              <img src="/resultpageimage.png" alt="Foundational" />
            </div>
            <div className='flex justify-center items-center border border-gray-400 p-4 w-80 m-3 rounded-md '>
              <p className='font-medium'><span className='font-bold' >Mathematical Thinking </span>Build your foundational skills in algebra, geometry, and probability.</p>
              <img src="/resultpageimage.png" alt="Foundational" />
            </div>
          </div>
        </div>}
      {/* <button onClick={}>restart</button> */}
    </>
  )
}

export default LearningPathResult