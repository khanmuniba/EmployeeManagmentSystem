import React, { useState,useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()

      setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

      const data = userData

      data.forEach(function (elem) {
          if (assignTo == elem.firstName) {
              elem.tasks.push(newTask)
              elem.taskNumber.newTask = elem.taskNumber.newTask + 1
          }
      })
      setUserData(data)
      console.log(data);

      setTaskTitle('')
      setCategory('')
      setAssignTo('')
      setTaskDate('')
      setTaskDescription('')

  }


  return (
    <div>
      <form
        onSubmit={submitHandler} // Changed to onSubmit
        className="flex w-full flex-wrap mt-5 p-5 rounded-xl bg-[#84A98C] items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-[#CAD2C5] text-lg font-bold mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-transparent py-1 px-2 border-[#CAD2C5] w-4/5 border-2 rounded-xl p-1 outline-none placeholder:text-[#CAD2C5]"
              type="text"
              placeholder="Make a UI design for the website"
            />
          </div>

          <div className="text-[#CAD2C5] text-lg font-bold mb-0.5">
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-transparent px-2 py-1 border-[#CAD2C5] w-4/5 border-2 rounded-xl p-1 outline-none placeholder:text-[#CAD2C5]"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-[#CAD2C5] text-lg font-bold mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="bg-transparent px-2 py-1 border-[#CAD2C5] w-4/5 border-2 rounded-xl p-1 outline-none placeholder:text-[#CAD2C5]"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-[#CAD2C5] text-lg font-bold mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent px-2 py-1 border-[#CAD2C5] w-4/5 border-2 rounded-xl p-1 outline-none placeholder:text-[#CAD2C5]"
              type="text"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col item-center justify-center">
          <h3 className="text-[#CAD2C5] text-lg font-bold mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="h-44 bg-transparent px-4 py-2 border-[#CAD2C5] w-4/5 border-2 rounded-xl p-1 outline-none placeholder:text-[#CAD2C5]"
            placeholder="Describe the task!!!!"
            rows={10}
            cols={30}
          />
          <button className="bg-[#CAD2C5] text-emerald-800 font-bold hover:bg-[#d0dec7] px-3 py-1 w-4/5 rounded mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
