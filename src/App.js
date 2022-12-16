import PeopleList from './components/PeopleList'
import AddPerson from './components/AddPerson'
import React from 'react';

import Data from './components/data/Data';

// måste install i terminal 
import {BrowserRouter as  Router ,Routes, Route } from 'react-router-dom';

// nav bar kan vara här 
function App(){
    return(
        <Router>
            <div className="App">
                <Routes>    
                <Route path='/' exact element={<Data/>}> </Route>
                    <Route path='/' exact element={<PeopleList/>}> </Route>
                    <Route path='/Create' element={<AddPerson/>}> </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App



