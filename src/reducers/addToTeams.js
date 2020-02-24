function addToTeams(state, action){
    return {
        ...state,
        user: {
            ...state.user,
            teams: [...state.user.teams, action.team]
        }
    }
}
export default addToTeams