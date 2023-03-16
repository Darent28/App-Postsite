import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';

export const HeaderPs = () => { 


        return <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <b class="navbar-brand">Ps</b>
            <span class="navbar-toggler-icon"></span>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="./">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Link</Link>
              </li>
            </ul>
            <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="./sign-in">SingIn</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="./log-in">LogIn</Link>
              </li>
            </ul>  
            </form>
          </div>
        </div>
      </nav>
       
        
    
}

export default HeaderPs
