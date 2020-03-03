function loadGame(state,action){
    console.log(action.floorCount)
    return {
        ...state,
        team: action.team,
        floorCount: action.floorCount,
        startGame: true
    }
}
export default loadGame