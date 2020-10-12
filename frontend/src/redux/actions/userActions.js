import axios from 'axios'

var path = 'http://localhost:4000/api'

const userActions = {

    createAccount : newUser =>{
        return async(dispatch, getState) => {
            const response = await axios.post(path + '/users', {newUser})
            console.log(response)
        }
    }
}

export default userActions