function updateTeam(state, action){
    if(state.attacking === state.dungeon.floor.enemies.length - 1){
        return {
            ...state,
            team: action.team,
            turn: 'player',
            attacking: 0
        }
    }else{
        return {
            ...state,
            team: action.team,
            attacking: state.attacking + 1
        }
    }
    
}
export default updateTeam