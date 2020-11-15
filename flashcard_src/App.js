import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Subjects from './Components/Subjects';
import MathCards from './Components/MathCards';
import EnglishCards from './Components/EnglishCards';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Subjects />
        <Switch>
          <Route path="/math">
            <MathCards />
          </Route>
          <Route path="/english">
            <EnglishCards />
          </Route>
          <Route path="/">
            <MathCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
