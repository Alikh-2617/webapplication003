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
                        <li>City : {person.city == null ? "0" : person.city.name}</li>
                        <li>Country: {person.city == null ? "0" : person.city.country.name }</li>
                        <li>Language :[ {person.languages == null ? "0" : person.languages.map((item)=><p key={item.id}>{item.name} </p>)}]</li>
                        <li>
                        <button className="btn btn-danger" onClick={()=>DeletePerson(person.id)}>Delete</button>
                        </li>
                    </div>
                }
            </td>
        </tr>
    )
}
