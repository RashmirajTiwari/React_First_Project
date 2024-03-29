
import React,{useState} from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  const [usersList,setUsersList]=useState([]);
  
  const addUserHandler=(uName,uAge)=>{
    console.log(uName,uAge)
    setUsersList((previousList)=>{
      return [...previousList,{name:uName,age:uAge,id:Math.random().toString()}]
    })

  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}></UserList>
    </React.Fragment>
  );
}

export default App;
