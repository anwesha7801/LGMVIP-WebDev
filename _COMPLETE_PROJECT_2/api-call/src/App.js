import React, { useState } from "react";
import './App.css';
import './App_Responsive.css';

const App = () => {
  const [user, Setuser] = useState([]);
  const getusers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    Setuser(jsonresponse.data);
  };

  return (
    <>
      <div className="user_btn">
        <button onClick={getusers}>GET USERS</button>
      </div>
      <div className="box">
        {user.map(({ id, email, first_name, last_name, avatar }) => {
          return (
            <div className="card">
              <div className="content">
                <img src={avatar} alt="" />
                <p className="name">{first_name}{last_name}</p>
                <p className="email">{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;