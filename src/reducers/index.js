import logIn from './logIn'
import { LOG_IN, GET_TEAM } from '../actions'
import getTeam from './getTeam'

const initialState = {
    user: {},
    dungeon: {},
    loggedIn: false,
    startGame: false
}

function reducer(state= initialState, action){
    switch(action.type){
        case LOG_IN:
            return logIn(state, action)
        case GET_TEAM:
            return getTeam(state, action)
        default:
            return state
    }
}

export default reducer;