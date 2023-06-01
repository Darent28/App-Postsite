import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';

export const HeaderPs = ({userdata, setUserdata}) => {
  const { email } = userdata.data.user;
  // const handleLogout = () => {
  //   // Realiza las operaciones necesarias para cerrar sesión
  //   // ...

  //   // Actualiza el estado userdata en el componente App
  //   setUserdata({ data: { user: { email: '', id: '', name: '', password: '' } } });
  // };

        return (
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand">Ps</a>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">Link</Link>
                </li>
              </ul>
              <form class="d-flex">
              
              {email ? (
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <p>Welcome {email}!!</p>
                        </li>
                        <li class="nav-item">
                              <Link class="nav-link" aria-current="page" to="/">SingOut</Link>
                        </li>
                  </ul>
                ) : (  
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="./sign-in">SingIn</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="./log-in">LogIn</Link>
                  </li>
                </ul>
                )}
              
              </form>
          </div>
      </nav>
        )




}

export default HeaderPs
