// import { useEffect, useState } from 'react';
import Header from '../others/header';
import TaskCards from '../others/TaskCards';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
 

 

  return (
    <div className='p-10 bg-[#43655d] h-screen'>
      <Header changeUser={props.changeUser} /> {/* Passing user data to Header */}
      <TaskCards data={props.data}/>
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
