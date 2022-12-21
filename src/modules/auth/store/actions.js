import { login, create, getUser } from '@/modules/auth/services'

export const loginUser = async ({ commit }, { email, password }) => {
    const response = await login(email, password)

    if (response.ok)
        commit('login', response.credentials)
    else throw response.message

    return response
}

export const logoutUser = async ({ commit }) => commit('logout')

export const registerUser = async ({ commit }, user) => {
    const response = await create(user)

    if (response.ok)
        commit('login', response.credentials)
    else throw response.message

    return response
}

export const checkSessionStatus = async ({ commit }) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        commit('logout')
        return false
    }

    const { ok, user } = await getUser(idToken)

    if (ok) {
        const credentials = {
            user,
            idToken,
            refreshToken,
        }
        commit('login', credentials)
    }
    else {
        commit('logout')
    }

    return ok

}