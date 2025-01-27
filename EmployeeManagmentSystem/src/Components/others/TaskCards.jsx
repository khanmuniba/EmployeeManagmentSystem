import 'react'

const TaskCards = ({data}) => {
  return (
    <div className='flex justify-between gap-5 w-full'> 
      <div className='bg-[#CAD2C5] rounded-xl w-[300px] px-9 py-6 mt-5'>
        <h2 className='text-emerald-900 font-semibold text-3xl'>{data.taskNumber.newTask}</h2>
        <h3 className='text-emerald-900 font-medium text-xl'>NewTask</h3>
      </div>

      <div className='bg-[#CAD2C5] rounded-xl w-[300px] px-9 py-6 mt-5'>
        <h2 className='text-emerald-900 font-semibold text-3xl'>{data.taskNumber.completed}</h2>
        <h3 className='text-emerald-900 font-medium text-xl'>Completed Task</h3>
      </div>

      <div className='bg-[#CAD2C5] rounded-xl w-[300px] px-9 py-6 mt-5'>
        <h2 className='text-emerald-900 font-semibold text-3xl'>{data.taskNumber.active}</h2>
        <h3 className=' text-emerald-900 font-medium text-xl'>Active Task</h3>
      </div>

      <div className='bg-[#CAD2C5] rounded-xl w-[300px] px-9 py-6 mt-5'>
        <h2 className='text-emerald-900 font-semibold text-3xl'>{data.taskNumber.failed}</h2>
        <h3 className='text-emerald-900 font-medium text-xl'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskCards
