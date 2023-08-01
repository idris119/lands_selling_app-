import { BrowserRouter, Routes, Route } from "react-router-dom";


import AuthProvider from "./context/authcontext";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Signup";
// import Layout from "./Layout/layout";

function App() {
    return (
  
        <BrowserRouter>
            <AuthProvider>
            <Login/>
            <Profile/>
            <Register/>
                {/* <Routes>
                    <Route path="/" element={<Layout />}>
                        
                    <Route path="/Login" element={<Login />}/>
                    </Route>
                </Routes> */}

            </AuthProvider>
        </BrowserRouter>
    )
}

export default App