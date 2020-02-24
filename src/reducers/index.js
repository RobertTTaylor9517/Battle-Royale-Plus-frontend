import logIn from './logIn'
import { LOG_IN } from '../actions'

const initialState = {
    user: {},
    dungeon: {},
    loggedIn: false,
}

function reducer(state= initialState, action){
    switch(action.type){
        case LOG_IN:
            return logIn(state, action)
        default:
            return state
    }
}

export default reducer;