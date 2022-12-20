import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AddPerson() {
    const navigate = useNavigate();

    const [person, setPerson] = useState({
        name: "",
        age: 0,
        phonenumber: "",
        // iställt att skicka en city med olika attribute skicka bara Id till den city till server att minska loss data .
        city:""
    });

    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:44317/api/react/city`)
            .then(res => {
                const city = res.data;
                setCities(city);
            });
    }, []);

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!person.name || !person.age || !person.phonenumber || !person.city) {
            alert('here gonna fylls');
            return;
        }
        CreatePerson();
    };

    function CreatePerson() {
        axios.post(`https://localhost:44317/api/react/create`, person)
            .then(response => response.status)
        navigate('/');
    }


    // required  gör att om nån field är tome inte skickas och visar massege och den skapades i handelchange funktion
    return (
        <div>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} required />
                </label>
                <label>
                    Age :
                    <input type="number" name="age" onChange={handleChange} required />
                </label>
                <label>
                    Phone number:
                    <input type="text" name="phonenumber" onChange={handleChange} required />
                </label>
                <label>
                    (Mörsil is Difault City ) Choose a city 
                    <select name="city" onChange={handleChange} required>
                        {cities.map((city) => (
                            <option value={city.id} key={city.id}>{city.name}</option>
                        ))}
                    </select> 
                     </label>
                <br/>
                <hr/>
                <br/>
                <button className='btn btn-primary' type="submit">Create person</button>
            </form>
        </div>
    );
}

export default AddPerson