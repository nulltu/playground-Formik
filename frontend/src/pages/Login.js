import React, { useState } from 'react'
import '../styles/createAccount.css'
import userActions from '../redux/actions/userActions'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { Button, TextField } from '@material-ui/core'
import '../styles/login.css'

const Login = (props) => {

    const [userAndPass, setUserAndPass] = useState({
        username: "", password: ""
    })

    const readInput = e => {
        const textInput = e.target.name
        const valueInput = e.target.value
        setUserAndPass({
            ...userAndPass,
            [textInput]: valueInput
        })
    }

    const sendData = async e => {
        e.preventDefault()
        props.login(userAndPass)
    }

    return (
        <>
            <Header />



            <form>
                <label htmlFor="">username</label>
                <TextField type="username" name="username" id="username" onChange={readInput}></TextField>
                <label htmlFor="" id="password">password</label>
                <TextField type="password" name="password" id="password" onChange={readInput} />
                <Button onClick={sendData}>Login</Button>
            </form>
        </>
    )
}


const mapDispatchToProps = {
    login: userActions.login

}


export default connect(null, mapDispatchToProps)(Login)