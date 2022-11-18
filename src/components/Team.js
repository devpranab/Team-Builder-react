import React, {useEffect, useState} from 'react';
import data from '../data/Data.json';

const Team = () => {
    const [teams, setTeam] = useState([]);

    useEffect(() => {
      setTeam(data);
    },[])
    return (
        <div>
     <ul>
      {
        teams.map((team) => <li>{team.name}</li>)
      }
     </ul>
        </div>
    );
};

export default Team;