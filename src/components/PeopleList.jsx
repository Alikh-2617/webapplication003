import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { Person } from "./Person";
export default class PeopleList extends React.Component{

    state={
        people : []
    }


    componentDidMount(){
        axios.get(`https://localhost:44317/api/react`)
        .then(result =>{
            const people = result.data;
            this.setState({people});
            console.log(people)
        })
    }

    
    // componentDidUpdate

    render(){
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
                        {this.state.people.sort((a,b) =>  a.name.localeCompare(b.name)).map((person)=>
                        <Person key={person.id} person={person} />
                        )}
                    </tbody>
                    </Table>
            </div>
        )}
}