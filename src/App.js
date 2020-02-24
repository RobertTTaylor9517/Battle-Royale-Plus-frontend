import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import User from './components/User'


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/'
        render={routerProps=><LogIn {...routerProps}/>}/>
        <Route exact path='/login'
        render={routerProps=><Signup {...routerProps}/>}/>
        <Route exact path='/user'
        render={routerProps=><User {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
