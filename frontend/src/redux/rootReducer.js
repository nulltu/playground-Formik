import userReducer from '../redux/reducers/userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    user:userReducer
})

export default rootReducer