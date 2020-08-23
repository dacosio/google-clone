import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage'


function App() {
return (
    <div className="app">
        <BrowserRouter>
            <Switch>
                   <Route exact path='/search'>
                       <SearchPage/>
                   </Route>
                   <Route exact path='/'>
                       <Home />
                   </Route>
            </Switch>
        </BrowserRouter>
    </div>
);
}

export default App;
