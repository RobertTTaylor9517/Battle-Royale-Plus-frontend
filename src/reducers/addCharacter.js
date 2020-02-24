function addCharacter(state, action){
    if(state.team.characters){
        return{
            ...state,
            team: {
                ...state.team,
                characters: [...state.team.characters, action.character]
            }
        }
    }else{
        return {
            ...state,
            team: {
                ...state.team,
                characters: [action.character]
            }
        }
    }
    
}

export default addCharacter