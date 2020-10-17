import React from 'react'
import { NavLink} from 'react-router-dom'
import '../styles/header.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { connect } from 'react-redux'

const Header = (props) => {

    console.log(props)
    return (
        <>
            <header>
                <nav>
                    <div>
                        <div className="container__preHeader">
                            <MailOutlineIcon style={{ color: '#f5f5f5' }} />
                            <NavLink to="">zab-di@gmail.com</NavLink>
                        </div>

                        {/* Si hay token se muestra el nombre del usuario en el Header, sino ee texto "create account" */}
                        {props.token === ""
                            ? <div className="container__preHeader">
                                <PersonIcon style={{ color: '#f5f5f5' }} />
                                <NavLink to="/createAccount">Create Account</NavLink>
                            </div>
                            : <div className="container__preHeader">
                                <NavLink to="/profile">{props.username}</NavLink>
                                <NavLink to="logout">
                                <PowerSettingsNewIcon style={{ color: '#f5f5f5', margin:'-.5rem 0rem'}}/>
                                </NavLink>
                            </div>}
                    </div>
                    <div className="container__navLinks">
                        <div>
                            <NavLink to="">Logo</NavLink>
                        </div>
                        <div>
                            <NavLink to="">Home</NavLink>
                            <NavLink to="">About Us</NavLink>
                            <NavLink to="">Service</NavLink>
                            <NavLink to="">Products</NavLink>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

const mapStateToProps = state => {
    return {
        //traigo estas dos propiedades que serán despues renderizadas
        username: state.user.username,
        token: state.user.token
    }
}

//conecto el Header a redux para poder traer el estado de login.
export default connect(mapStateToProps)(Header)