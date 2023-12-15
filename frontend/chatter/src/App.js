import './App.css';
import React from 'react';
import Header from './Head';
import Footer from "./Footer";
import Home from './Home';
import Login from './login';
import Register from "./register"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 

function App() {
  return (
    <BrowserRouter>{/*Browser roter or just Router should be enclosing th eroot element for routing to work*/ }
    <div className='body'>
      <Header/>
    
      <Footer/>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
