import currentUser from './user.reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({ 
    currentUser
})

export default rootReducer;  