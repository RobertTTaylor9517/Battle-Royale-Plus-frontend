function addCharacter(state, action){
    return{
        ...state,
        team: {
            ...state.team,
            characters: [...state.team.characters, action.character]
        }
    }
}