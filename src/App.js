import React from 'react';
import SignUp from './Components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './Components/Signin';
function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </switch>
      </div>

    </Router>
  );
}

export default App;
