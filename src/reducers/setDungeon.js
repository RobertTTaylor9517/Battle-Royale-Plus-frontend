function setDungeon(state,action){
    return{
        ...state,
        dungeon: action.dungeon
    }
}
export default setDungeon