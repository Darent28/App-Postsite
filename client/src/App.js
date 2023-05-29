import HeaderPs from './Components/header';
import Home from './Components/home';
import LogIn from './Components/login';
import SignIn from './Components/signin';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';




function App() {

  const [ user, setUser ] = useState({
     name: '',
     email: '',
     password: '',
     passwordConfirm: '' 
  })

  const [token, setToken] = useState('');
  const [userdata, setUserdata] = useState({data:{user:{
    email: '',
    id: '',
    name: '',
    password: ''
  }}});

    useEffect(() => {

      const requestInit = {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token },
        body: JSON.stringify()
      }
      fetch('http://localhost:5000/home', requestInit)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la solicitud');
        }
        return res.json();
      })
      .then((data) => { 
        setUserdata(data);
        console.log(data);

    })
    .catch((error) => {
      // Manejo de errores
      console.error(error);
    });
    }, [token]);


  return (
    <div>
        <HeaderPs userdata={userdata} setUserdata={setUserdata} />
          <Routes>
              <Route path='/' element={  <Home email={userdata}/>  } />
              <Route path='/log_in' element={ <LogIn user={user} setUser={setUser} setToken={setToken} />  } />
              <Route path='/sign_in' element={ <SignIn user={user} setUser={setUser}/>  }/>         
          </Routes>
    </div>
  );
}

export default App;


   
    // <div>
    // {
    // (typeof backendData.user === 'undefined') ? (
    //   <p>No connection 0_0</p>
    // ): (
    //   backendData.user.map((user, i) => (
    //     <p key={i}>{user}</p>
        

    //   ))
    // ) }
    // </div>