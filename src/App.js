import { BrowserRouter, Routes, Route } from "react-router-dom";


import AuthProvider from "./context/authcontext";
import Login from "./components/Login";
// import Layout from "./Layout/layout";

function App() {
    return (
  
        <BrowserRouter>
            <AuthProvider>
            <Login/>
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