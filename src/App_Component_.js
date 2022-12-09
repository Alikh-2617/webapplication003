// här skriver vi olika componenter till App 
// file Name bör vara samma namn med function
//------------------------------------------------------------------------------- 3 
import Ali from './components/Ali';
import Ali2 from './components/Ali2';
import Ali3 from './components/Ali3';
function App_Component_(){
   return (<div id="app" className="container" > 
   <Ali />
   <Ali2/>
   <Ali3/>
   </div>)
}
 export default App_Component_  // skicka ut den function till ut ifrån av den file 




//-------------------------------------------------------------------------------- 2 
// function App_Component_(){
//     return (<div id="app" className="container" > HELLO </div>)
// }
// export default App_Component_  // skicka ut den function till ut ifrån av den file 