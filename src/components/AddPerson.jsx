import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';

function AddPerson(){
    
    const navigate = useNavigate();


    const [cites , setCites] = useState([])



    useEffect(()=>{
        axios.get(`https://localhost:44317/api/react/city`)
        .then(res =>{
            const city = res.data;
            setCites(city)
            console.log(cites)

        })
    },[])

    

    const[person, setPerson] = useState({
        name: "",
        age: 0,
        phonenumber: "",
        cityid : ""
    }); 


const handleChange =(event)=>{
    setPerson({...person, [event.target.name]: event.target.value});
};
const handleSubmit =(event)=>{
    event.preventDefault();
    setPerson({
        name: this.state.name,
        age: this.state.age,
        phonenumber: this.state.phonenumber,
        cityid: this.state.cityid
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
            <input type="text" name="phonenumber" onChange={handleChange}></input> 
            <label>choose city : </label>
            <select >
                {/* {
                    cites.map((city)=>{
                        <option value={city.id} key={city.id} > {city.name} item </option>
                        // <option type="text" name="cityid"  value={item.id} > {item.name} item </option>
                    })
                } */}
            </select>
            
            | 

            <button className='btn btn-info' type="submit" onClick={()=>CreatePerson()}>Create person</button>
        </form>
    </div>
)

}

export default AddPerson