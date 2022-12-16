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
                        <li>City : {person.city == null ? "0" : person.city.name}</li>
                        <li>Country: {person.city == null ? "0" : person.city.country.name }</li>
                        <li>Language :[ {person.languages == null ? "0" : person.languages.map((item)=><p key={item.id}>{item.name} </p>)}]</li>
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