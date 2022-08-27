import './App.css';
import { useState, useEffect } from 'react';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
    //fetch("https://randomuser.me/api/?result=15")
    .then(res => res.json())
    .then(data => setUsers(data.results))
    .catch(err => console.log(err))
  }, [])

  // function
  const addMembers = (name) => {
    console.log("member added", name);
  }
  return (
    <div className="App">
     <h1>Team Builder {users.length}</h1>
     {
      users.map(user => <User user={user} addMembers={addMembers}></User>)
     }
    </div>
  );
}

export default App;
