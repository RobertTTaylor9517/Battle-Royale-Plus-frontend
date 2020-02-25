function updateTeam(state, action){
    return {
        ...state,
        team: action.team,
        turn: 'player'
    }
}
export default updateTeam