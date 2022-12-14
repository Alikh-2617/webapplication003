import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Show from './show'
function Data(){

    const [Data , setData] = useState([])

    useEffect(()=>{
        axios.get(`https://localhost:44317/api/react`)
        .then(res =>{
            setData(res.data)
            console.log(res.data)
        })
    },[])

    async function DeletePerson(props) {
        console.log(props)
        await axios.delete(`https://localhost:44317/api/react/${props}`)
            .then(response => response.data)
            setData(Data.filter((item)=>item.id !== props))
    }





return(
    <div className="container">
    <br/>
    <h2>People</h2>
    <br/>
    <Link to="/Create">
        <button className="btn btn-info">Create New Person</button>
    </Link>
    <hr/>
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                Data.sort((a,b) =>  a.name.localeCompare(b.name)).map((person)=>
                <Show key={person.id} person={person} onDelete={DeletePerson}/>
            )}
        </tbody>
        </Table>
</div>
)

}


export default Data