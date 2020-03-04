import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import User from './components/User'
import Game from './containers/Game'
import HowToPlay from './components/HowToPlay'


function App() {
  return (
    <Router>
      <div className='backColor'>
        <Route exact path='/'
        render={routerProps=><LogIn {...routerProps}/>}/>
        <Route exact path='/signup'
        render={routerProps=><Signup {...routerProps}/>}/>
        <Route exact path='/user'
        render={routerProps=><User {...routerProps}/>}/>
        <Route exact path='/game'
        render={routerProps => <Game {...routerProps}/>}/>
        <div style={{position: 'absolute', bottom: '0', right: '0'}} >
          <HowToPlay/>
        </div>
      </div>
    </Router>
  );
}

export default App;
