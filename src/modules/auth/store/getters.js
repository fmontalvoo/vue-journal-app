export const currentState = (state) => {
    return state.status
}

export const username = (state) => state.user?.name || 'Usuario'

export const email = (state) => state.user?.email || 'email@example.com'