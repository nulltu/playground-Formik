const initialState = {
    username : "Rusbelito"
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case 'LOGIN_APP':
            return{
                ...state,
                username: action.payload.username
            }
            default:
                return state
    }
}

export default userReducer