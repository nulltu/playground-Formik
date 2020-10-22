import React, { useState } from 'react'

const FormAddProducts = () => {

    const [product, setProduct] = useState({
        title: '', description: '', image:'', price: ''
    })

    const readInput = (e) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

    console.log(product.image)

    return (
        <>
            <form action="">
                <input type="text" name="title" placeholder="Title" onChange={readInput}/>
                <input type="text" name="description" placeholder="Description" onChange={readInput}/>
                <input type="file" name="image" onChange={readInput}/>
                <input type="number" name="price" placeholder="Price" onChange={readInput}/>
                <button>Send</button>
            </form>
        </>
    )
}

export default FormAddProducts