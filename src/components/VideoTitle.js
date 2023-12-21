import React from 'react'
import { GrPlayFill } from 'react-icons/gr'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' pt-[15%] px-10 absolute'>
      <p className=' w-1/3 text-6xl font-bold mb-3 text-white'>
        {title}
      </p>
      <p className=' w-1/3 font-semibold mb-2 text-white text-lg'>
        {overview}
      </p>
      <div className=' flex gap-5'>
        <button className='flex items-center gap-2 py-2 px-5 bg-white text-2xl font-semibold text-black rounded-md hover:bg-opacity-80'>
          <GrPlayFill color='black' fontSize='1.65rem' /> Play
        </button>
        <button className='flex items-center gap-2 py-2 px-5 bg-zinc-400 text-2xl font-semibold text-white rounded-md'>
          <AiOutlineInfoCircle color='white' fontSize='1.65rem' /> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle