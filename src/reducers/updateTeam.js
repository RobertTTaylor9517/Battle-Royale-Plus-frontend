function updateTeam(state, action){
    console.log(action.message)
    if(state.attacking === state.dungeon.floor.enemies.length - 1){
        return {
            ...state,
            team: action.team,
            turn: 'player',
            attacking: 0,
            message: [...state.message, ...action.message]
        }
    }else{
        return {
            ...state,
            team: action.team,
            attacking: state.attacking + 1,
            message: [...state.message, ...action.message]
        }
    }
    
}
export default updateTeam