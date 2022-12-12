import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component{

    state={
        people:[]
    }

    componentDidMount(){
        axios.get(`https://localhost:44317/api/react`)  // skicka Get request till den URL 
        .then(result =>{                                // och sen svart ( result ) som är svar ska sparas i nästa esteg
            const people = result.data;                 // ta data från result och spara i people
            this.setState({people});                    // spara i stats=> people []            
        })
    }


    render(){        // vad ska skickas till baka från den function Viktigt ( return ska bara vara en ELEMENT)
        return(
            <div>
                <div>
                    <br/>
                    <h2>People </h2>
                    <hr />
                    <br/>
                </div>
                <div>
                    <table class="table">
                        <thead>
                           <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Register Date</th>
                            <th></th>
                            </tr>
                         </thead>
                        <tbody>
                        {
                            this.state.people.map((person)=>
                            <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.phoneNumber}</td>
                            <td>{person.register}</td>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}