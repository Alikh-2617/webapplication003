import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function AddPerson(){
    
    const navigate = useNavigate();
    const[person, setPerson] = useState({
        name: "",
        age: 0,
        phonenumber: ""
    }); 

const handleChange =(event)=>{
    setPerson({...person, [event.target.name]: event.target.value});
};
const handleSubmit =(event)=>{
    event.preventDefault();
    setPerson({
        name: this.state.name,
        age: this.state.age,
        phonenumber: this.state.phonenumber
    });
};

function CreatePerson(){
    axios.post(`https://localhost:44317/api/react/create`,person)
    .then(response=>response.status)

    navigate('/');
}

return(
    <div>
        <h3>Create new person</h3>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange}></input>
            <label>Age:</label>
            <input type="number" name="age" onChange={handleChange}></input>
            <label>Phone: </label>
            <input type="text" name="phonenumber" onChange={handleChange}></input> | 

            <button className='btn btn-info' type="submit" onClick={()=>CreatePerson()}>Create person</button>
        </form>
    </div>
)

}