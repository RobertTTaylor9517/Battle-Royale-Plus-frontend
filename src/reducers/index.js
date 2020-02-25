import logIn from './logIn'
import { LOG_IN, GET_TEAM, ADD_TO_TEAMS, ADD_CHARACTER, START_GAME, SET_DUNGEON, SET_FLOOR } from '../actions'
import getTeam from './getTeam'
import addToTeams from './addToTeams'
import addCharacter from './addCharacter'
import startGame from './startGame'
import setDungeon from './setDungeon'
import setFloor from './setFloor'

const initialState = {
    user: {},
    dungeon: {},
    team: {},
    loggedIn: false,
    startGame: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOG_IN:
            return logIn(state, action)
        case GET_TEAM:
            return getTeam(state, action)
        case ADD_TO_TEAMS:
            return addToTeams(state, action)
        case ADD_CHARACTER:
            return addCharacter(state, action)
        case START_GAME:
            return startGame(state, action)
        case SET_DUNGEON:
            return setDungeon(state,action)
        case SET_FLOOR:
            return setFloor(state, action)
        default:
            return state
    }
}

export default reducer;