function addToTeams(state, action){
    return {
        ...state,
        team: action.team
    }
}
export default addToTeams