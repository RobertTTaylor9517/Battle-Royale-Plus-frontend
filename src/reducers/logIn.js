function logIn(state, action){
    if(action.token !== undefined){
        localStorage.setItem("token", action.token)
        return {
            ...state,
            loggedIn: true
        }
    }else{
        return state;
    }
}

export default logIn