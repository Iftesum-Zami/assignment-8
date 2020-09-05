import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import UserDetail from './Components/UserDetail/UserDetail';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about/:userId">
            <UserDetail></UserDetail>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
