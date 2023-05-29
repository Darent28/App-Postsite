import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';

export const HeaderPs = ({userdata, setUserdata}) => { 
  const { email } = userdata.data.user;
  const handleLogout = () => {
    // Realiza las operaciones necesarias para cerrar sesión
    // ...
    
    // Actualiza el estado userdata en el componente App
    setUserdata({ data: { user: { email: '', id: '', name: '', password: '' } } });
  };

        return (
                  <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand">Ps</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="./">Home <span class="sr-only"></span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Link</Link>
              </li>
        
            </ul>
            <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {email && (
                <li class="nav-item">
                  <p>Welcome {email}!!</p>
                </li>

              )}
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="./sign_in">SingIn</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="./log_in">LogIn</Link>
              </li>
            </ul>  
            </form>
        </div>
      </nav>
        )

       
        
    
}

export default HeaderPs
