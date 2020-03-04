function loadGame(state,action){
    console.log(action.team)
    return {
        ...state,
        dungeon: action.dungeon,
        team: action.team,
        floorCount: action.floorCount,
        startGame: true
    }
}
export default loadGame