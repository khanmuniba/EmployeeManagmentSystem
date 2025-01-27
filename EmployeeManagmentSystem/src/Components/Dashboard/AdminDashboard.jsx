import 'react';
import Header from '../others/header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="bg-[#18443c] h-[100vw] w-full p-10">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
