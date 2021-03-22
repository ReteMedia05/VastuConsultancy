import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vastulogo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul class="navbar-nav mr-auto">
            <Link to = "/">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                </li>
            </Link>
            <Link to ="/calendar">
                <li class="nav-item">
                    <a class="nav-link" href="#">Calendar</a>
                </li>
            </Link>
          </ul> */}
            
            <ul class = "navbar-nav">
                <Link to = '/'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                </Link>
                <Link to = '/contact'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                </Link>
                <Link to = '/aboutus'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                </Link>
                <Link to = '/bookappointment'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Book Appointment</a>
                </li>
                </Link><Link to = '/vaastuportfolio'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Vaastu Portfolio</a>
                </li>
                </Link>
                
            </ul>
            
            
            
        </div>
      </nav>
        </div>
        
        
        
    )
}

export default Navbar;