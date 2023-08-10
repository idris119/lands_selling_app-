import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authcontext';

export default function Navbar() {
    const { currentuser } = useContext(AuthContext);
    console.log("user from navbar", currentuser);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bolder">Property Sale</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Have an account?
                            </Link>
                            <ul className="dropdown-menu bg-success">
                                <li>
                                    <Link to="/Signup" className="dropdown-item">Signup</Link>
                                </li>
                                <li>
                                    <Link to="/Login" className="dropdown-item">Login</Link>
                                </li>
                            </ul>
                        </li>
                        { currentuser ? 
                        <>
                        <li className="nav-item dropdown">
                            <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Properties
                            </Link>
                            <ul className="dropdown-menu bg-success">
                                <li>
                                    <Link to="/Vehicles" className="dropdown-item">Vehicles</Link>
                                </li>
                                <li>
                                    <Link to="/Lands" className="dropdown-item">Lands</Link>
                                </li>
                                <li>
                                    <Link to="/Houses" className="dropdown-item">Houses</Link>
                                </li>
                            </ul>
                        </li>
    <li className="nav-item">
        <Link to="/SearchComponent" className="nav-link">Search</Link>
    </li>
    <li className="nav-item">
        <Link to="/Payment" className="nav-link">Payment</Link>
    </li>
    <li className="nav-item">
        <Link to="/AddProperty" className="nav-link">Add Property</Link>
    </li>
    <li className="nav-item">
        <Link to="/approve-property" className="nav-link">Approve Property</Link>
    </li>
    <li className="nav-item">
        <Link to="/Aboutus" className="nav-link">About us</Link>
    </li>
    <li className="nav-item">
        <Link to="/Profile" className="nav-link">Profile</Link>
    </li>
    </>
    : null}
</ul>


                        </div>
                    </div>
            </nav>
    );
}
