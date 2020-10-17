import axios from 'axios'

var path = 'http://localhost:4000/api'

const userActions = {

    //con esta accion creo un nuevo usuario y a la vez despacho username y token cuando responde la db"
    createAccount : newUser =>{
        console.log(newUser)
        return async(dispatch, getState) => {
            const response = await axios.post(path + '/users', newUser)
            console.log(response.data)
            dispatch({
                type:'LOGIN_APP',
                payload:{
                    username: response.data.username,
                    token: response.data.token
                }
            })
        }
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUT_APP'
            })
        }
    }
}

export default userActions