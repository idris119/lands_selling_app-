import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import from 'react-router-dom'
import AboutUs from './components/Aboutus';
import LandsList from './components/LandsList';
import Footer from './Layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Define your routes */}
          <Route exact path="/" component={LandsList} />
          <Route exact path="/about" component={AboutUs} />
          {/* Add more routes as needed */}
        </Switch>
        {/* Place the Footer component at the bottom of your app */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
