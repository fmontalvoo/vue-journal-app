export const currentState = (state) => {
    return state.status
}

export const username = (state) => state.user?.name || 'Usuario'