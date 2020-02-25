function setDungeon(state,action){
    return{
        ...state,
        dungeon: action.dungeon,
        floorCount: 0
    }
}
export default setDungeon