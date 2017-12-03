import { createStore, combineReducers } from 'redux'
import { user } from '@/redux/reducer/user.jsx'

const allReducers = combineReducers({
    user: user
})

var store = createStore(allReducers);

export default store; 