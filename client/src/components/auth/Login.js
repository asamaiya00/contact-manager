import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { login, error, clearErrors, isAuthenticated } = useContext(
    AuthContext
  );

  const [user, setUser] = useState({ email: '', password: '' });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      setAlert(error, ' danger');
      clearErrors();
    }

    

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
