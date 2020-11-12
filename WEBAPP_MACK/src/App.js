import React from 'react';
import './App.css';

import PrivateRoute from './Components/Routes/PrivateRoute';
import {Container} from 'react-bootstrap';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';
import ForgotPassword from './Components/Pages/ForgotPassword';
import UpdateProfile from './Components/Pages/UpdateProfile';
import Dashboard from './Components/Pages/Dashboard';
import Service from './Components/Pages/Service';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (   
      <Container className="d-flex align-items-center justify-content-center" style={ {minHeight: '100vh'}}>
        <div className="w-100" style={{maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} /> 
                <PrivateRoute exact path="/update-profile" component={UpdateProfile} /> 
                <PrivateRoute exact path="/services" component={Service} /> 
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
  );
}

export default App;
