function getTeam(state, action){
    return {
        ...state,
        team: action.team
    }
}
export default getTeam