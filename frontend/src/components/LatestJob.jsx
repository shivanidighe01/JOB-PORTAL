import React from 'react'
import LatestJobCard from './LatestJobCard';

const randomJob=[1,2,3,4,5,6,7,8];
const LatestJob = () => {
  return (
    <div className='max-w-7xl my-auto mx-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span>Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
            {
                randomJob.slice(0,6).map((item,index)=><LatestJobCard></LatestJobCard>)
            }
        </div>
    </div>
  )
}

export default LatestJob