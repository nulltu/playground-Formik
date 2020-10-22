import userReducer from '../redux/reducers/userReducer'
import productReducer from '../redux/reducers/productReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    user : userReducer,
    product : productReducer
})

export default rootReducer