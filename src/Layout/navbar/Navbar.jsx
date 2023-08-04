import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success mt-0 fixed-top justify-content-between">
                <div className="container" style={{marginLeft: '-20px' }}>
                    <a className="navbar-brand fw-bolder text-white"  href="/"><h2>Property Sale</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >

                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-white fw-bolder" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link active dropdown-toggle text-white fw-bolder"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Properties
                                </Link>
                                <ul className="dropdown-menu bg-success ">
                                    <li>
                                        <Link to="/Vehicles" className="dropdown-item text-white fw-bolder">Vehicles</Link>
                                    </li>
                                    <li>
                                        <Link to="/Lands" className="dropdown-item text-white fw-bolder">Lands</Link>
                                    </li>
                                    <li>
                                        <Link to="/Houses" className="dropdown-item text-white fw-bolder">Houses</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/SearchComponent" className="nav-link active text-white fw-bolder">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Payment" className="nav-link active text-white fw-bolder">Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AddProperty" className="nav-link active text-white fw-bolder">Add Property</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ApproveProperty" className="nav-link active text-white fw-bolder">Approve Property</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/Aboutus" className="nav-link active text-white fw-bolder">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link active dropdown-toggle text-white fw-bolder"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Have an account?
                                </Link>
                                <ul className="dropdown-menu bg-success">
                                    <li>
                                        <Link to="/Signup" className="dropdown-item text-white fw-bolder">Signup</Link>
                                    </li>
                                    <li>
                                        <Link to="/Login" className="dropdown-item text-white fw-bolder">Login</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Profile" className="nav-link active text-white fw-bolder">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

