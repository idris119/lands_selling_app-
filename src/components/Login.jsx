import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I love this');
    login(email, password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <div className='input-group'>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">remember me</label>
              </div>
              <button type="submit" className="btn btn-primary">login</button>
            </form>
            <div className="my-5">
              Doesn't have an account?{' '}
              <Link className="ml-4" to="/Signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
