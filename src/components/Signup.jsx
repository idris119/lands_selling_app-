import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/authcontext';
import { Link } from 'react-router-dom';

export default function Register() {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + '  ' + email + '  ' + phone_number + '  ' + password);
    register(name, email, phone_number, password);
  };

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '70px' }}>
      <form onSubmit={handleSubmit} className="w-45 bg-white p-5 shadow-sm">
        <h1 className="font-semibold text-2xl my-6">Sign Up</h1>

        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label font-weight-bold">
            Your Name
          </label>
          <div className='input-group'>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Name"
            required
          />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Your Email
          </label>
          <div className='input-group'>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
            required
          />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label font-weight-bold">
            Phone Number
          </label>
          <div className='input-group'>
          <input
            type="tel"
            id="phone_number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
            placeholder="Phone Number"
            required
          />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label font-weight-bold">
            Your Password
          </label>
          <div className='input-group'>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block text-white"
          style={{ backgroundColor: 'green' }}
        >
          Sign up
        </button>

        {/* Login Link */}
        <div className="my-5">
          Already Registered?{' '}
          <Link className="ml-4" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
