import React from "react";
import { useState } from "react";
import axios from "axios";
import "./register.css"

function Register(){
    const [resData,setResData]=useState("");
    const [formData,setFormData]=useState({
        fname:"",
        lname:"",
        username:"",
        password:"",
        cpassword:""

    });
    async function handleSubmit(e){
        e.preventDefault();
        if(formData.password !== formData.cpassword){alert("Passwords do not match")}
        console.log("Data collected are "+JSON.stringify(formData));
        try{
        const response=await axios.post("http://localhost:8001/register", formData,{
            headers: {
              "Content-Type": "application/json",
            }})
            setResData(response.data);
            console.log(resData);
        }
        catch(error){if (error.response.status === 409) {
            alert('Username already exists. Please choose a different username.');
          } else
            alert('An error occurred while registering:', error.message);
          }
    }
    function handleChange(e){
        const {name,value}=e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));


    }



    
    return(
        <div className="reg" style={{marginTop:"100px" }}>
            <form className="regform" onSubmit={handleSubmit}>
                <h2>Register</h2>
                    <input className="regfields" name="fname" type="text" placeholder="First name" onChange={handleChange}/><br/>
                    <input className="regfields" name="lname" type="text" placeholder="Last name" onChange={handleChange}/><br/>
                    <input className="regfields" name="username" type="text" placeholder="choose a username" onChange={handleChange}/><br/>
                    <input className="regfields" name="password" type="password" placeholder="password"onChange={handleChange}/><br/>
                    <input className="regfields" name="cpassword" type="password" placeholder="Confirm password"onChange={handleChange}/><br/>
                    <div className="buttons">
                        <button type="submit" className="btnsub">Register</button>
                        <button type="Reset" className="btnrst">Reset</button>
                        <p>{resData}</p>
                        
                    </div>
                
            </form>
        </div>
    );
}


export default Register;