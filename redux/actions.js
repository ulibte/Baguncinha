// action types
export const USER_IS_LOGGED = 'USER_IS_LOGGED'

// action creators
export const userIsLogged = isLogged => ({
    type: USER_IS_LOGGED,
    payload: isLogged,
})

