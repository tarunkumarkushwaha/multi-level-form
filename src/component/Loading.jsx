import React from 'react'
const Loading = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh]'>
        <div class="w-12 m-5 h-12 border-4 border-yellow-500 rounded-full flex items-center justify-center">
        </div>
        <p className="font-bold m-5 text-center">
          Finding learning path recommendations for you based on your responses
        </p>
      </div>
    </>
  )
}

export default Loading