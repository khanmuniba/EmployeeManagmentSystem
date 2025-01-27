import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="Tasklist"
      className="h-[55%] mt-7 flex items-center justify-start overflow-x-auto gap-3 flex-nowrap w-full"
    >
      {data.tasks.map((e, idx) => {
        // Ensure proper conditions based on task properties
        if (e.active) {
          return <AcceptTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        }
        if (e.newTask) { // Make sure the property matches your data (e.newTask)
          return <NewTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        }
        return null; // Return nothing if no condition matches
      })}
    </div>
  );
};

export default TaskList;
