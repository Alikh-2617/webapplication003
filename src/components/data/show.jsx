import React , {useState } from 'react'

function Show({person , onDelete }){

    const [show , setShow] = useState(false)

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
                        <li>Phone Number : {person.phoneNumber}</li>
                        <li>Register Date  : {person.register}</li>
                        {person.city == null ? "" :<li> City : {person.city.name} </li> } 
                        {person.city == null ? " " : <li> Country :  {person.city.country.name} </li> }
                        {person.languages.map((item)=>
                        
                        <li key={item.id}> Language : {item.name}</li>)}

                        <li>
                        <button className="btn btn-danger" onClick={()=>onDelete(person.id)}>Delete</button>
                        </li>
                    </div>
                }
            </td>
        </tr>
    )
}
export default Show