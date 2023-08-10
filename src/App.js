import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/navbar/Navbar';
import Home from './components/Home'; 
import Properties from './components/Properties'; 
import SearchComponent from './components/SearchComponent'
import Payment from './components/Payment';
import Addproperty from './components/Addproperty'; 
import Approveproperties from './components/Approveproperties'; // Updated import
import Aboutus from './components/Aboutus' 
import Vehicles from './components/Vehicles';
import AuthProvider from './context/authcontext'
import Footer from './Layout/Footer';
import Houses from './components/Houses';
import Lands from './components/Lands';
import Login from './components/Login';
import Register from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (    
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/SearchComponent" element={<SearchComponent />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Addproperty" element={<Addproperty />} />
            <Route path="/approve-property" element={<Approveproperties />} /> {/* Updated element */}
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path='/Vehicles' element={<Vehicles />} />
            <Route path='/Houses' element={<Houses />} />
            <Route path='/Lands' element={<Lands />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/Profile' element={<Profile />} />   
            {/* <Route path="/houses/:houseId" element={<HouseDetails houses={Houses} />} /> */}
          </Routes>
          <Footer/>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
