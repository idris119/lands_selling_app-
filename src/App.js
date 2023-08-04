import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/navbar/Navbar';
import Home from './components/Home'; 
import Properties from './components/Properties'; 
import SearchComponent from './components/SearchComponent'
import Payment from './components/Payment';
import Addproperty from './components/Addproperty'; 
import Approveproperties from './components/Approveproperties';
import Aboutus from './components/Aboutus' 
import Vehicles from './components/Vehicles';
import AuthProvider from './context/authcontext'
import Footer from './Layout/Footer';
import Houses from './components/Houses';
import LandsList from './components/LandsList';
import Login from './components/Login';
import Register from './components/Signup';
function App() {
  return (
    
    <Router>
      <AuthProvider>


      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/SearchComponent" element={<SearchComponent />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Addproperty" element={<Addproperty />} />
          <Route path="/Approveproperties" element={<Approveproperties />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path='/Vehicles' element={<Vehicles />} />
          <Route path='/Houses' element={<Houses />} />
          <Route path='/LandsList' element={<LandsList />} />
          <Route path='/Properties' element={<Properties />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />

        
        </Routes>
        <Footer/>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App