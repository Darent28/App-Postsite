import HeaderPs from './Components/header';
import Home from './Components/home';
import LogIn from './Components/login';
import SignIn from './Components/signin';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';




function App() {

  const [ user, setUser ] = useState({
     name: '',
     email: '',
     password: '',
     passwordConfirm: '' 
  })

  return (
    <div>
        <HeaderPs />
          <Routes>
              <Route path='/' element={  <Home />  } />
              <Route path='/log_in' element={ <LogIn user={user} setUser={setUser} />  } />
              <Route path='/sign_in' element={ <SignIn user={user} setUser={setUser} />  }/>         
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