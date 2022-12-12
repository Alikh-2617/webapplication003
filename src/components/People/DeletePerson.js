import React from "react";
import axios from "axios";

export default class DeletePerson extends React.Component{

    state = {  // data som ska skickas till baka till server for att tar bort personner
        id:''
    }

    handleChange = event =>{   // event för input fält om lagera id som skickas in 
        this.setState({id:event.target.value}) // lägg value i id 
    }

    handleSubmit = event =>{  // när vi trycka på submit
        event.preventDefault();
        axios.delete(`https://localhost:44317/api/react/${this.state.id}`)
        .then(result =>
            {   // och sedan visa resultatet i consol i browser
                console.log(result);
            console.log(result.data);
            }
            )
    }     
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                <label>person ID :
                <input type="text" name="id" onChange={this.handleChange} ></input>
                </label>
                <button type="submit">delete</button>
                </form>
            </div>
        )
    }

}