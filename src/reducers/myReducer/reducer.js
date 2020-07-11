import {combineReducers} from 'redux'
import list from './ListReducer'
import retrieve from './ObjUserReducer'
export default  combineReducers({
    list,
    retrieve
})