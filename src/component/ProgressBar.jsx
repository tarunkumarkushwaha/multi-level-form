import React, { useEffect, useState } from 'react'

const ProgressBar = ({prevPage,page}) => {
  const [progressWidth, setprogressWidth] = useState(0)
  // console.log(progressWidth)
  useEffect(() => {
    setprogressWidth(page/5*100)
  }, [page])
  
  return (
    <>
    <div className='flex justify-start items-center p-5 mx-40'>
    <button className='font-bold' onClick={prevPage}>
    <svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg>
    </button>
    <div className='h-1 mx-2 bg-emerald-400' style={{width:progressWidth+"%"}}></div>
    </div>

    </>
  )
}

export default ProgressBar