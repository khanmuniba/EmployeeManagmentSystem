import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full shrink-0 w-[300px] bg-emerald-950 p-5 rounded-xl'>
    <h4 className='text-[#CAD2C5] text-sm '>{data.taskDate || "No Date Provided"}</h4>
    <h2 className='mt-5 text-xl text-[#CAD2C5] font-semibold'>{data.taskTitle || "No Task Title"}</h2>
    <p className='mt-3 text-[#CAD2C5] text-sm'> {data.taskDescription || "No Task Description"}</p>
    <div className=' mt-10'>
    
    {/* <button className='bg-[#CAD2C5] hover:bg-[#e0e9db] text-sm  text-black font-semibold rounded-md px-1'>Mark as Completed</button> */}
    <button className="bg-[#CAD2C5] w-full hover:bg-[#e0e9db] text-sm text-emerald-900 font-semibold rounded-md px-1 py-2">Complete</button>
    </div>
  </div>
  )
}

export default FailedTask