import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import Theme from "../lib/theme";

import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../pages/private/Dashboard';

import Signup from '../pages/public/Signup/Signup';
import Login from '../pages/public/Login/Login';
import ForgotPassword from '../pages/public/ForgotPassword/ForgotPassword';


const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(Theme)
  }, [])

  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Dashboard 
                theme={theme}
              />}/>
            </Route>

            <Route path="/signup" element={
              <Signup 
                theme={theme}
              />
            }/>

            <Route path="/login" element={
              <Login 
                theme={theme}
              />
            }/>

            <Route path="/forgot-password" element={
              <ForgotPassword 
                theme={theme}
              />
            }/>

          </Routes>
        </div>
      </Container>
  );
}

export default App;
