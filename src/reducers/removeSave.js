function removeSave(state,action){
    let newSaves = [...state.user.saves].filter(save=>save.id !== action.save_id)
    return{
        ...state,
        user: {
            ...state.user,
            saves: newSaves
        }
    }
}
export default removeSave