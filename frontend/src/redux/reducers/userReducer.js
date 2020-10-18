const initialState = {
    username : "",
    token: "",   
    role: ""
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_APP':
            return{
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                role: action.payload.role
            }
        case 'LOGOUT_APP':
            return{
                ...state,
                ...initialState
            }
            default:
                return state
    }
}

export default userReducer