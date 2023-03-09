import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="right-nav">

          <h1>PayLux</h1>
        </div>
        <div className="center-nav">
          <div className="menu-items">
       
            <Link to="/"> Home </Link>
                <Link to="/working">How It Works</Link>
        
            
                <Link to ="/signup">Create Account</Link>
        
            
                <Link to="/contact">Contact</Link>
        
            
          </div>
        </div>

        <div className="left-nav">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
