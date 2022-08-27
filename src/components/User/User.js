import React from 'react';

const User = props => {
const {name, email, picture, website} = props.user;
const userStyle = {
  border: '2px solid red',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  width: '40%'
}
  return (
    <div style={userStyle}>
      <div style={{marginTop: '25px'}}>
        <img src={picture.large} alt=""/>
      </div>
      <div style={{marginLeft: '20px'}}>
        <h1>Name: {name.first + " " + name.last}</h1>
        <p>email: {email}</p>
        <p><a target="_blank" href={website}>Learn about me</a></p>
        <button>Add me</button>
      </div> 
    </div>
  );
};

export default User;