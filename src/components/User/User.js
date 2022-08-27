import React, { useState } from 'react';

const User = props => {
const {name, email, picture, website, phone} = props.user;
const addMembers = props.addMembers;
const [mobile, setMobile] = useState("");
const fullName = name.first + " " + name.last;
const userStyle = {
  border: '2px solid red',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  width: '40%'
}

// function
const showPhno = () => setMobile(phone);
  return (
    <div style={userStyle}>
      <div style={{marginTop: '25px'}}>
        <img src={picture.large} alt=""/>
      </div>
      <div style={{marginLeft: '20px'}}>
        <h1>Name: {fullName}</h1>
        <p>email: {email}</p>
        <p><a target="_blank" href={website}>Learn about me</a></p>
        <p>phone number: {mobile}</p>
        <button onClick={showPhno}>Show phone number</button>
        <button onClick={() => addMembers(fullName)}>Add me</button>
      </div> 
    </div>
  );
};

export default User;