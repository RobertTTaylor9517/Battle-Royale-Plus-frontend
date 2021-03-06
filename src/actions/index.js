export const LOG_IN = 'LOG_IN'
export const GET_TEAM = 'GET_TEAM'
export const ADD_TO_TEAMS = 'ADD_TO_TEAMS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const START_GAME = 'START_GAME'
export const SET_DUNGEON = 'SET_DUNGEON'
export const SET_FLOOR = 'SET_FLOOR'
export const UPDATE_ENEMY = 'UPDATE_ENEMY'
export const UPDATE_TEAM = 'UPDATE_TEAM'
export const UPDATE_CHAR = 'UPDATE_CHAR'
export const MOUNT_ATTACK = 'MOUNT_ATTACK'
export const LOG_OUT ='LOG_OUT'
export const SAVE_GAME = 'SAVE_GAME'
export const LOAD_GAME = 'LOAD_GAME'
export const REMOVE_SAVE = 'REMOVE_SAVE'
export const RESET = 'RESET'

export const logIn = (token, user, attacks, saves) =>({
    type: LOG_IN,
    token,
    user,
    attacks,
    saves
})

export const logOut = () =>({
    type: LOG_OUT
})

export const getTeam = (team) =>({
    type: GET_TEAM,
    team,
})

export const addToTeams = (team)=>({
    type: ADD_TO_TEAMS,
    team
})

export const addCharacter = (character)=>({
    type: ADD_CHARACTER,
    character,
})

export const startGame = ()=>({
    type: START_GAME,
})

export const setDungeon = (dungeon)=>({
    type: SET_DUNGEON,
    dungeon
})

export const setFloor = (floor)=>({
    type: SET_FLOOR,
    floor
})

export const mountAttack = (attack)=>({
    type: MOUNT_ATTACK,
    attack
})

export const updateEnemy =(enemy, index, message)=>({
    type: UPDATE_ENEMY,
    enemy,
    index,
    message
})

export const updateTeam = (team, message)=>({
    type: UPDATE_TEAM,
    team,
    message
})

export const updateChar = (char, index) => ({
    type: UPDATE_CHAR,
    char,
    index
})

export const loadGame = (team, floorCount, dungeon)=>({
    type: LOAD_GAME,
    team,
    floorCount,
    dungeon
})

export const reset = ()=>({
    type: RESET
})

export const removeSave=(save_id)=>({
    type: REMOVE_SAVE,
    save_id,
})

