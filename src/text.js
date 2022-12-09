// filen som kör när Appen körs 
// impoertera React 
import React from 'react'
import ReactDOM from 'react-dom'  // föratt kunna REANDERA vår Element i TAG platser i INDEX    
//----------------------------------------------------------------------------------------------------------------- 4
// import style
import './style/index.css'

import App_Component_ from './App_Component_'


ReactDOM.render(< App_Component_/> , document.getElementById('root_4'))



//------------------------------------------------------------------------------------------------------------------- 3
// STEP 3 använd compunent med child component 
// import App_Component_ from './App_Component_'


// ReactDOM.render(< App_Component_/> , document.getElementById('root_4'))



//-------------------------------------------------------------------------------------------------------------------- 2
// STEP 2  
// splitera delar av peojectet ( fera CONPONENT ) och importera Componeneter till huvod File vilken är INDEX.JS
// vi skapar en annan File som heter (App_componenter.js) och sen anväder vi componenter när 

 // import App_Component_ from './App_Component_'
// import App_Component_2_ from './App_Component_2_'



// sen bara använder App_Componenten 
// ReactDOM.render(<App_Component_ /> , document.getElementById('root_2'))
// ReactDOM.render(<App_Component_2_/> , document.getElementById('root_3'))



//----------------------------------------------------------------------------------------------------------------------- 1
// STEP 1 
// Virtua Dom , vi skapar en Element som ska köras i DIV i index.html
// vi skapa en value for att kunna spara den komand i den 
const element = React.createElement(
    'div',                               // element tag som ska skapas ar DIV
    {id:'app' , className :'container'}, // Det DIV har Id (add) och className (container)
    'Fan Tog Den shit '                              // värde i den Element eller content 
)

const elemnt1 = (   // eller vi kan skriva den på det sättet 
    <div id ='app1' className='container1' > Fan Tog Den shit 1 </div>
)

function App() // eller vi kan skriva function för den ( Name = component )
{
    return (<div id ='app1' className='container1' > Fan Tog Den shit 2 </div>)
}




// nu kan Reandra den Element som vi skapades i den Elemnt plats som vi tog med ID : root
// (vad ska reanderas , vart ska Reandras)

const root = document.getElementById('root') // nu ska vi säga tar in en Elemnt eller tag som heter ROOT och laggera den i den CONST
const root1 = document.getElementById('root_1')
ReactDOM.render(element , root) // bara en Elemnt reanderas 
ReactDOM.render(<App/> , root1) // function reanderas
ReactDOM.render(<App/> , document.getElementById('root_2')) // en annan väg 
//-----------------------------------------------------------------------------------------------------------------------------------------

