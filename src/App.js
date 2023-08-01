import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/navbar/Navbar';
import Home from './components/Home'; 
import Properties from './components/Properties'; 
import Payment from './components/Payment';
import Addproperty from './components/Addproperty'; 
import Approveproperties from './components/Approveproperties'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Addproperty" element={<Addproperty />} />
          <Route path="/Approveproperties" element={<Approveproperties />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
