import axios from 'axios'

var path = 'http://localhost:4000/api'

const productActions = {

    //con esta accion creo un nuevo usuario y a la vez despacho username y token cuando responde la db"
    addProduct : newProduct =>{

        return async(dispatch, getState) => {
            const response = await axios.post(path + '/products', newProduct)
            console.log(response)
        }
    }
}

export default productActions