import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./publish-edit.css"

export const Edit = () => {
    const { id_post } = useParams();
    const [formData, setFormData] = useState({ title: "", text: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = () => {

        const requestInit = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };
        fetch(`http://localhost:5000/editPost/${(id_post)}`, requestInit)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return(
        <div className="custom-edit">
            <h1 align="center">Edit publish</h1>
            <p align="center">Edit your post</p>
            <form  align="center" className= "publish" onSubmit={handleSubmit}>
                <div className="form-group">
                        Tittle:
                        <input
                        type="text"
                        className="form-control custom-input"
                        name="tittle"
                        defaultValue={formData.title}
                        onChange={handleChange}
                        required/>
                </div>
                <div className="form-group ">
                        Text:
                        <textarea type="text"
                        className="form-control custom-input"
                        name="text"
                        defaultValue={formData.text}
                        onChange={handleChange}
                        required/>
                </div>
                <button type="submit" className="btn btn-secondary form-control" value="Submit" onClick={() => handleSubmit(id_post)} >Edit</button>
            </form>
        </div>
    )
}

export default Edit