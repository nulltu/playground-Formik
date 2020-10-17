import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Logout from './pages/Logout'
import './styles/globalStyles.css'
import { connect } from 'react-redux'
import Profile from './pages/Profile'

function App(props) {

  const myRoutes = props.tokenLogged
    ? (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/logout' component={Logout} />
        <Route path='/profile' component={Profile} />
        <Redirect to='/' />
      </Switch>
    )
    : (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/login' component={Login} />
        <Route path='/createAccount' component={CreateAccount} />
        <Redirect to='/' />
      </Switch>
    )
  return (
    <>
      <BrowserRouter>
        {myRoutes}
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = state => {
  return {
    tokenLogged: state.user.token
  }
}

export default connect(mapStateToProps)(App)


