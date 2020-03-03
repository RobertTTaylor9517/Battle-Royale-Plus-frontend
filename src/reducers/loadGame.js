function loadGame(state,action){
    console.log(action.floorCount)
    return {
        ...state,
        dungeon: action.dungeon,
        team: action.team,
        floorCount: action.floorCount,
        startGame: true
    }
}
export default loadGame