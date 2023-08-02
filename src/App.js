
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/Home';
import Contactus from './components/Contactus';
import { Switch } from 'react-router';

function App() {
  return (
    <Router>
      <div>
      <HomePage/>
      <Contactus/>
      
      </div>
    </Router>
  );
}

export default App;
