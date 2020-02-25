function mountAttack(state,action){
    return{
        ...state,
        mntAttack: action.attack
    }
}

export default mountAttack