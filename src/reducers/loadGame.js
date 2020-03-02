function loadGame(state,action){
    return {
        ...state,
        team: action.team,
        floorCount: action.floorCount + 1,
        startGame: true
    }
}
export default loadGame