import axios from 'axios'

var path = 'http://localhost:4000/api'

const userActions = {

    //con esta accion creo un nuevo usuario y a la vez despacho username y token cuando responde la db"
    createAccount : newUser =>{

        return async(dispatch, getState) => {
            const response = await axios.post(path + '/users', newUser)
            console.log(response)
            dispatch({
                type:'LOGIN_APP',
                payload:{
                    username: response.data.username,
                    token: response.data.token,
                    role: response.data.role
                }
            })
        }
    },

    login: userAndPass  =>{
        return async(dispatch, getState)=>{
            const response = await axios.post(path + '/login', userAndPass)
            console.log(response.data)
            dispatch({
                type:'LOGIN_APP',
                payload:{
                    username: response.data.username,
                    token: response.data.token,
                    role: response.data.role
                }
            })
        }
        
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            console.log(dispatch)
            dispatch({
                type: 'LOGOUT_APP'
            })
        }
    }
}

export default userActions