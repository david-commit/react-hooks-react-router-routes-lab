import React from 'react';
import { Route, Switch } from 'react-router-dom'; //SWITCH
import NavBar from './NavBar';
import Home from './Home';
import Actors from './Actors';
import Directors from './Directors';
import Movies from './Movies';

function App() {
  return (
    <div>
      {/*{code here}*/}
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path='/directors' exact>
          <Directors />
        </Route>
        <Route path='/actors' exact>
          <Actors />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
