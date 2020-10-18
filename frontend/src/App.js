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
import Admin from './pages/Admin'

function App(props) {

 
     if (props.role=== "admin") {
    var myRoutes =
      (<Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/admin" />
      </Switch>
      )
  }else if (props.token) {
    var myRoutes =
      (<Switch>
         <Route exact path="/products" component={Products} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      )
  }
  else {
    var myRoutes = 
    (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/createAccount" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/" />
    </Switch>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          {myRoutes}
        </Switch>
      </BrowserRouter>
    </>
  )
}


const mapStateToProps = state => {
  return {
    token: state.user.token,
    role: state.user.role
  }
}

export default connect(mapStateToProps)(App)


