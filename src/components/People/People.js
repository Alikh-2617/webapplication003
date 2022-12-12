import DeletePerson from './DeletePerson'
import PersonList from './PersonList'

// vi kan använda funktion för hantera vår class (list class , delet class , detajl class )

export default function People(){
    return(
        <div id='app' className = 'container'>
            <PersonList/>
            <DeletePerson/>
        </div>
    )
}
