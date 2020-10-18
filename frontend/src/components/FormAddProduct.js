import React from 'react'

const FormAddProducts = () => {
    return (
        <>
            <form action="">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Images Links" />
                <input type="number" placeholder="Price" />
                <button>Send</button>
            </form>
        </>
    )
}

export default FormAddProducts