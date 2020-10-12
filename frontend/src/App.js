import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Logout from './pages/Logout'

function App() {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/createAccount' component={CreateAccount} />
          <Route path='/logout' component={Logout} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App;


