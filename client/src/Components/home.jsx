import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'

export const Home = () => {

    // const [backendData, setBackendData] = useState([])
    
    // useEffect(() => {
    //     const loginUser = async () => {
    //       const response = await fetch('http://localhost:5000/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           name:  user.name,
    //           password: user.password,
    //         }),
    //       });
    //       const data = await response.json();
    //       setBackendData(data.user);
    //     };
    //     loginUser();
    // }, []);

    // const { state } = location;
    // const { user } = state || {};

    return(
        <div>
            <h1 align="center">PostSite</h1>
            <p align="center">My website using React, by David Elizondo Ramos.</p>
            <div> 
            {/* <p>Welcome, {user.name}!</p> */}
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Username</h5>
                    <h6 className="card-subtitle mb-2 text-muted">publish date</h6>
                    <br/>
                    <p className="card-text">Text publish: Some quick example text to build on the card title and make up the bulk of the card's content.</p>      
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Username</h5>
                    <h6 className="card-subtitle mb-2 text-muted">publish date</h6>
                    <br/>
                    <p className="card-text">Text publish: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                </div>
            </div>
        </div> 
    )
}

export default Home


// const [backendData, setBackendData] = useState([{}])

// useEffect ( () => { 
//   fetch("/api").then(
//     response => response.json()
//   ).then(
//     data => { 
//       setBackendData(data)
//     }
//   )
// }, []) 

// return(

//     <div>
//         {
//         (typeof backendData.user === 'undefined') ? (
//         <p>No connection 0_0</p>
//         ): (
//         backendData.user.map((user, i) => (
//             <p key={i}>{user}</p>
            

//         ))
//         ) }
//     </div>
// )