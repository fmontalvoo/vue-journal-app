import { create } from '@/modules/auth/services'

export const createUser = async ({ commit }, user) => {
    const response = await create(user)

    if (response.ok)
        commit('login', response.credentials)

    return response
}