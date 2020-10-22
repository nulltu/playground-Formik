import React, { useState } from 'react'
import {connect} from 'react-redux'
import '../styles/admin.css'
import { Button, TextField } from '@material-ui/core'
import productActions from '../redux/actions/productActions'

const FormAddProducts = () => {

    const [product, setProduct] = useState({
        title: '', description: '', image:'', price: ''
    })

    const readTextField = (e) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

    const sendFormProduct = async e => {
        const formData = new FormData()
        formData.append('title', product.title)
        formData.append('description', product.description)
        formData.append('image', product.image)
        formData.append('price', product.price)
    }

    console.log(product)

    return (
        <>
            <form action="">
                <TextField type="text" name="title" placeholder="Title" onChange={readTextField}/>
                <TextField type="text" name="description" placeholder="Description" onChange={readTextField}/>
                <TextField type="file" name="image" onChange={readTextField}/>
                <TextField type="number" name="price" placeholder="Price" onChange={readTextField}/>
                <button onClick={sendFormProduct}>Send</button>
            </form>
        </>
    )
}

const mapDispatchToProps = () =>{
    return {
        sendFormProduct : productActions.addProduct
    }
}

export default connect(null, mapDispatchToProps) (FormAddProducts)