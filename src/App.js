import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Layout/navbarNavbar';
import Home from './Home'; 
import Properties from './Properties'; 
import Payment from './Payment';
import AddProperty from './AddProperty'; 
import ApproveProperty from './ApproveProperty'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Properties" component={Properties} />
          <Route path="/Payment" component={Payment} />
          <Route path="/AddProperty" component={AddProperty} />
          <Route path="/ApproveProperty" component={ApproveProperty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
