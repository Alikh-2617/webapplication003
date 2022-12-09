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


    render(){        // vad ska skickas till baka från den function
        return(
            <ul>
                <h2>People</h2>
                {
                    this.state.people.map(
                        (person) =>  <li key={person.id}>{person.name}</li>
                    )
                }
            </ul>
        )
    }
}