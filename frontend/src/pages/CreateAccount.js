import React, { useState } from 'react'
import '../styles/createAccount.css'
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

const CreateAccount = (props) => {

    const [dataUser, setDataUser] = useState({
        email:"", username: "", password: ""
    })

   
    const readInput = e =>{
        const textInput = e.target.name
        const valueInput = e.target.value 
        setDataUser({
            ...dataUser,
            [textInput]:valueInput
        })
    }

    const sendData = async e =>{
        e.preventDefault()
        await props.createAccount(dataUser)
    }


    return (
        <>
            <Header />
            <form>
                <input type="email" name="email" id="email" placeholder="Enter your email" onChange={readInput}/>
                <input type="username" name="username" id="username" placeholder="Enter your username" onChange={readInput}/>
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={readInput}/>
                <button type="submit" onClick={sendData}>Submit</button>
                <span>Do you already have an account?</span><NavLink to="/login">Login</NavLink>
            </form>
            <Footer></Footer>
        </>
    )
}


const mapDispatchToProps = {
    createAccount : userActions.createAccount
    
}

export default connect(null, mapDispatchToProps) (CreateAccount)



// const CreateAccount = (props) => {
//     const {
//         handleSubmit,
//         isSubmitting,
//         errors
//     } = props
   
       
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <Field type="email" name="email" id="email" placeholder="Enter your email"/>
//                 <Field type="username" name="username" id="username" placeholder="Enter your username" />
//                 <span>{errors.username}</span>
//                 <Field type="password" name="password" id="password" placeholder="Enter your password" />
//                 <span>{errors.password}</span>
//                 <button type="submit" disabled={isSubmitting} >Submit</button>
//             </form>
//         </>
//     )
// }


// const mapStateToProps = state => {
//     return {
//       token: state.user.token
//     }
//   }
// const mapDispatchToProps = {
//     createAccount : userActions.createAccount
    
// }

// export default  withFormik({

//     mapPropsToValues(props) {
//         return {
//             email: '',
//             username: '',
//             password: ''
//         }
//     },
//     validate(values) {
//         const errors = {}
//         if (values.username.length < 5) {
//             errors.username = 'Username must be at least 5 characters'
//         } else if (!values.password) {
//             errors.password = 'Password is required'
//         } else if (values.password.length < 6) {
//             errors.password = 'Password must be at least 6 characters'
//         }
//         return errors
//     },

//     handleSubmit(values, formikBag) {
//         formikBag.setSubmitting(false)
        
//     }
    
  
// },connect(mapStateToProps, mapDispatchToProps)) (CreateAccount)



