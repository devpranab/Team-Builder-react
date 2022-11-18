import './App.css';
import { useState, useEffect } from 'react';
import User from './components/User/User';
import Team from './components/Team';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

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
    setTeam([...team, name]);
  }

  return (
    <div className="App">
     <h1>Team Builder {users.length}</h1>
     <ul>
      {
        team.map( (m) => <li>{m}</li>)
        // team.map( (m, idx) => <li key={idx}>{m}</li>)
      }
     </ul>
     {
      users.map(user => <User user={user} addMembers={addMembers}></User>)
     }

    <Team/>
    </div>
  );
}

export default App;
// build team and how react works