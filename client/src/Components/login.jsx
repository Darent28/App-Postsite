import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';


export const LogIn = ({ user, setUser, setToken }) => {
    
    const handleClick = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

    }

    let { name, password } = user

    const navigate = useNavigate();

    const handleSubmit = e => { 

        e.preventDefault();

        if ( name === '' || password === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        const user = { name, password };
        
         //fetch
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        }

        fetch('http://localhost:5000/login', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            if (res.token) {
                setToken(res.token);
                navigate('/');
                
                //reload state
                setUser({
                    name: '',
                    password: ''
                });
            } else {
                console.log('Login failed!'); 
                // do something here to handle failed login    
                alert('Usuario no existe')
         
            }
             
        })

       
    }

    return(
        <div className='top'>
            <h1 align="center">Ps</h1>
            <p align="center">Log in to PostSite</p>
            <form onSubmit={ handleSubmit }  align="center" className= "login">
         
                <div className="form-group">
                    <label htmlFor="username">
                        Username:
                        <input type="text" className="form-control" name="name" 
                        onChange={handleClick} aria-describedby="name" required/>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password: 
                        <input type="password" className="form-control" name="password" 
                        onChange={handleClick}
                        aria-describedby="password" required/>
                    </label>
                   
                </div>
                <button type="submit" className="btn btn-secondary" value="Submit">Log in</button>
            </form>
            <p className="account">New to PostSite? <a className="forgot" href="./sign_in">Create account</a>.</p>
        </div> 
    )
}

export default LogIn