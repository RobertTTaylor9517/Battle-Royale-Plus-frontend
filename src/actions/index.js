export const LOG_IN = 'LOG_IN'
export const GET_TEAM = 'GET_TEAM'

export const logIn = (token, user, attacks) =>({
    type: LOG_IN,
    token,
    user,
    attacks
})

export const getTeam = (team) =>({
    type: GET_TEAM,
    team,
})