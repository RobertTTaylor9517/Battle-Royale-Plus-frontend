function getTeam(state, action){
    return {
        ...state,
        user: {
            ...state.user,
            team: action.team
        }
    }
}
export default getTeam