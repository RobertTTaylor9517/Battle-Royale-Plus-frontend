import logIn from './logIn'
import { LOG_IN, GET_TEAM, ADD_TO_TEAMS, ADD_CHARACTER, START_GAME, SET_DUNGEON, SET_FLOOR, MOUNT_ATTACK, UPDATE_ENEMY, UPDATE_TEAM, LOG_OUT, UPDATE_CHAR, LOAD_GAME, RESET, REMOVE_SAVE } from '../actions'
import getTeam from './getTeam'
import addToTeams from './addToTeams'
import addCharacter from './addCharacter'
import startGame from './startGame'
import setDungeon from './setDungeon'
import setFloor from './setFloor'
import mountAttack from './mountAttack'
import updateEnemy from './updateEnemy'
import updateChar from './updateChar'
import updateTeam from './updateTeam'
import logOut from './logOut'
import loadGame from './loadGame'
import reset from './reset'
import removeSave from './removeSave'

const initialState = {
    user: {},
    dungeon: {},
    team: {},
    loggedIn: false,
    startGame: false,
    floorCount: 0,
    message: []
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
        case MOUNT_ATTACK:
            return mountAttack(state, action)
        case UPDATE_ENEMY:
            return updateEnemy(state, action)
        case UPDATE_CHAR:
            return updateChar(state,action)
        case UPDATE_TEAM:
            return updateTeam(state, action)
        case LOG_OUT:
            return logOut(state, action)
        case LOAD_GAME:
            return loadGame(state,action)
        case REMOVE_SAVE:
            return removeSave(state,action)
        case RESET:
            return reset(state, action)
        default:
            return state
    }
}

export default reducer;