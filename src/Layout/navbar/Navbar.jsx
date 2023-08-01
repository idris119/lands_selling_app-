import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success mt-3">
                <div className="container">
                    <a className="navbar-brand fw-bolder text-white" href="/"><h2>Property Sale</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link active text-white" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Properties" className="nav-link active text-white">Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/SearchComponent" className="nav-link active text-white">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Payment" className="nav-link active text-white">Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AddProperty" className="nav-link active text-white">Add Property</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ApproveProperty" className="nav-link active text-white">Approve Property</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About us" className="nav-link active text-white">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
                                <ul className="dropdown-menu bg-success">
                                    <li><Link to="/Profile" className="dropdown-item text-white" href="#">Profile</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
