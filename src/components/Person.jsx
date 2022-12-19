import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export function Person(props){
    const navigate = useNavigate();
    const person= props.person
    
    const [show , setShow] = useState(false)
    const finns = person.city ;

    async function DeletePerson(props) {
        console.log(props)
        await axios.delete(`https://localhost:44317/api/react/${props}`)
            .then(response => response.data)
            // navigate til root !! funkar inte för att jag är i root :/
            navigate('/')
    }
    

    return(
        <tr>
            <td>
                <p>{person.name}</p>
            </td>
            <td>
                <p>{person.phoneNumber}</p>
            </td>
            <td>
                <button className="btn btn-info" type="submit" onClick={()=>setShow(!show)}>Details [Show/hidd]</button>
                {                       
                    show && 
                    <div>
                        <li>Age : {person.age}</li>
                        <li>Register Date : {person.register}</li>

                        {person.city == null ? "" :<li> City : {person.city.name} </li> } 
                        {person.city == null ? " " : <li> Country :  {person.city.country.name} </li> }
                        {person.languages.map((item)=>

                            <li key={item.id}> Language : {item.name}</li>)}
                        <li> <button className="btn btn-danger" onClick={()=>DeletePerson(person.id)}>Delete</button></li>
                    </div>
                }
            </td>
        </tr>
    )
}
