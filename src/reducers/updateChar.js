function updateChar(state,action){
    if(state.attacking === state.team.characters.length - 1){
        let temp = [...state.team.characters]
        temp[action.index] = action.char
        return{
            ...state,
            team: {
                ...state.team,
                characters: temp
            },
            attacking: 0,
            turn: 'enemy',
            mntAttack: {}
        }
    }else{
        let temp = [...state.team.characters]
        temp[action.index] = action.char
        return{
            ...state,
            team: {
                ...state.team,
                characters: temp
            },
            attacking: state.attacking + 1,
            mntAttack: {}
        }
    }
}
export default updateChar