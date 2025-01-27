
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className=' p-5 rounded mt-5'>
        <div className='bg-[#84a98c] mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg text-[#cad2c5] font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg  text-[#cad2c5] font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg  text-[#cad2c5] font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg text-[#cad2c5]  font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg text-[#cad2c5]  font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-[#cad2c5] mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg text-[#cad2c5]  font-medium  w-1/5'>{elem.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-[#cad2c5]'>{elem.taskNumber.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-[#cad2c5]'>{elem.taskNumber.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-[#cad2c5]'>{elem.taskNumber.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-[#cad2c5]'>{elem.taskNumber.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask
