import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";
function Header(){ 
    return(
        
        <div className="navbar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <ul>
                    <li>< Link to="/">Home</Link></li>
                    <li>< Link to="/register">Register</Link></li>
                    <li>< Link to="/login">Login</Link></li>
                </ul>
                
                <form >
                    <input type="text" placeholder="Search..."></input>
                    <button id="searchbtn"><i class="fa fa-search"></i></button>
                </form>
        </div>

    );

}

export default Header;
