import { login, create } from '@/modules/auth/services'

export const loginUser = async ({ commit }, { email, password }) => {
    const response = await login(email, password)

    if (response.ok)
        commit('login', response.credentials)
    else throw response.message

    return response
}

export const registerUser = async ({ commit }, user) => {
    const response = await create(user)

    if (response.ok)
        commit('login', response.credentials)
    else throw response.message

    return response
}