export const LOG_IN = 'LOG_IN'
export const GET_TEAM = 'GET_TEAM'
export const ADD_TO_TEAMS = 'ADD_TO_TEAMS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const START_GAME = 'START_GAME'
export const SET_DUNGEON = 'SET_DUNGEON'

export const logIn = (token, user, attacks, teams) =>({
    type: LOG_IN,
    token,
    user,
    attacks,
    teams
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
    type: START_GAME
})

export const setDungeon = (dungeon)=>({
    type: SET_DUNGEON,
    dungeon
})
