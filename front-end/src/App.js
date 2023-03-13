import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import RestorePassword from './RestorePassword';

function App() {
  const [isRefrigeratorOpen, setIsRefrigeratorOpen] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleRefrigeratorOpen = () => {
    setIsRefrigeratorOpen(true);
  };

  const handleSignIn = () => {
    setIsUserSignedIn(true);
  };

  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="Refrigerator-container">
              <div
                className={`Refrigerator-door ${isRefrigeratorOpen ? 'open' : ''}`}
                onClick={handleRefrigeratorOpen}
              >
                <div className="Refrigerator-handle" />
              </div>
            </div>
            {isUserSignedIn ? (
              <h1>Welcome back, User!</h1>
            ) : (
              <Link to="/signin">
                <button>Sign In</button>
              </Link>
            )}
          </header>
          <Routes>
            <Route exact path="/signin">
              <SignIn onSignIn={handleSignIn} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/restorepassword">
              <RestorePassword />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
