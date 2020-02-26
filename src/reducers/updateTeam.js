function updateTeam(state, action){
    if(state.attacking === state.dungeon.floor.enemies.length - 1 && state.turn === 'enemy'){
        return {
            ...state,
            team: action.team,
            turn: 'player',
            attacking: 0
        }
    }else if(state.attacking === state.team.characters.length - 1 && state.turn === 'player'){
        return {
            ...state,
            team: action.team,
            turn: 'enemy',
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