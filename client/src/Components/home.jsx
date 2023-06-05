import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'
import './modal.css'

export const Home = ({ userdata }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const [post, setPost] = useState({
        tittle: '',
        text: ''
    });

    const handleText = e => {

        setPost({
          ...post,
          [e.target.name]: e.target.value
        })
    }


    let {tittle, text, id_user} = post

    id_user = userdata.data.user.id

    const handleSubmit = (event) => {
        event.preventDefault();
        //data validation
        if ( tittle === '' || text === '' || id_user === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        const fullpost = {
            tittle,
            text,
            id_user 
        }

        
    
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fullpost),
        }

        fetch('http://localhost:5000/post', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res)
        })


    
        console.log(fullpost)
        setIsOpen(false);
    }

    const [postData, setpostData] = useState([{}])



    useEffect ( () => { 
      fetch('http://localhost:5000/getpost', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        }).then(
            response => response.json()
        ).then(
            data => { 
                setpostData(data)
                console.log(data)
            }
        
        )
    
        }, []) 
   
    return(
        <div className='Home'>
            <h1 className='custom-h1-post' align="center">PostSite</h1>
            <p align="center">My website using React, by David Elizondo Ramos.</p>
            {userdata.data.user.id && (
                <div>
                    <input
                        className="form-control custom-publish"
                        placeholder="¿Something new today?"
                        onClick={handleClick}
                    />
                </div>
            )}

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

            {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                            Tittle: 
                            <input type="text" className="form-control custom-input" name="tittle" 
                            onChange={handleText} required/>
                </div>
                <div className="form-group">
                            Text: 
                            <textarea type="text" className="form-control custom-input" name="text" 
                            onChange={handleText} required/>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button type="submit" className="btn btn-secondary">Publish</button>
                    <button type="submit" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
            </form>
          </div>
        </div>
      )}
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