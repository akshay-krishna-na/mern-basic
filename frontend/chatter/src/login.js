import React, { useState, useRef } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [uname, changeUN] = useState("");
  const [upass, changeUP] = useState("");
  //const [success, setSuccess] = useState("");
  const [res,setRes]=useState(null);

  const inputRef = useRef(null);

  const handleChangeT = (event) => {
    changeUN(event.target.value);
    console.log(uname);
  };

  const handleChangeP = (event) => {
    changeUP(event.target.value);
    console.log(upass);
  };



    const handleSubmit = async (e) => {
      e.preventDefault();
      let data={sname:uname,pass:upass};
      alert("sending date is "+data.pass);
  
      const response = await axios.post("http://localhost:8001/login", data,{
        headers: {
          "Content-Type": "application/json",
        }});
  
      if (response.status === 200) {
        
        setRes(response.data);
        console.log(response.body);
        alert("Login successful!");}
      else if(response.status===409){
        setRes("username already taken,Please use another");
          }
       else {
        alert("Login failed!");
      }
    };

  return (
    <div className="login" style={{ marginTop: "100px" }}>
      <form className="loginform" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          ref={inputRef}
          className="loginfields"
          type="text"
          name="name"
          placeholder="username"
          onChange={handleChangeT}
        />
        <br />
        <input
          className="loginfields"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChangeP}
        />
        <br />
        <div className="buttons">
          <button type="submit" className="btnsub">Login</button>
          <button type="Reset" className="btnrst">Reset</button>
          {res}
        </div>
      </form>
    </div>
  );
}

export default Login;
