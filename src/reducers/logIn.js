function logIn(state, action){
    if(action.token !== undefined){
        localStorage.setItem("token", action.token)
        return {
            ...state,
            user: {
                ...action.user,
            saves: action.saves},
            attacks: action.attacks,
            loggedIn: true
        }
    }else{
        return state;
    }
}

export default logIn