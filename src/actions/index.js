export const LOG_IN = 'LOG_IN'

export const logIn = (token) =>({
    type: LOG_IN,
    token,
})