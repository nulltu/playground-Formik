import React, { useState } from 'react'
import '../styles/createAccount.css'
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Header from '../components/Header'

const Login = (props) => {

    const [userAndPass, setUserAndPass] = useState({
        username: "", password: ""
    })
   
    const readInput = e =>{
        const textInput = e.target.name
        const valueInput = e.target.value 
        setUserAndPass({
            ...userAndPass,
            [textInput]:valueInput
        })
    }

    const sendData = async e =>{
        e.preventDefault()
        props.login(userAndPass)
    
    }


    return (
        <>
            <Header />
            <form>
                <input type="username" name="username" id="username" placeholder="Enter your username" onChange={readInput}/>
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={readInput}/>
                <button onClick={sendData}>Login</button>
            </form>
        </>
    )
}


const mapDispatchToProps = {
    login : userActions.login
    
}


export default connect(null, mapDispatchToProps) (Login)