function reset(state,action){
    return{
        ...state,
        dungeon: {},
        team: {},
        startGame: false,
    }
}
export default reset