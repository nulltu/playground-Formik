import React, { useState, useEffect } from 'react'
import { withFormik, Field } from 'formik'
import '../styles/createAccount.css'

const CreateAccount = (props) => {
    const {
        handleSubmit,
        isSubmitting,
        errors
    } = props
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field type="email" name="email" id="email" placeholder="Enter your email"/>
                <Field type="username" name="username" id="username" placeholder="Enter your username" />
                <span>{errors.username}</span>
                <Field type="password" name="password" id="password" placeholder="Enter your password" />
                <span>{errors.password}</span>
                <button type="submit" disabled={isSubmitting} >Submit</button>
            </form>
        </>
    )
}

export default  withFormik({
    mapPropsToValues(props) {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    validate(values) {
        const errors = {}
        if (values.username.length < 5) {
            errors.username = 'Username must be at least 5 characters'
        } else if (!values.password) {
            errors.password = 'Password is required'
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters'
        }
        return errors
    },

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false)
        console.log()
    }
}) (CreateAccount)



