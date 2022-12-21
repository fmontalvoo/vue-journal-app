import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {
    const store = useStore()

    const login = async ({ email, password }) => {
        const response = await store.dispatch('auth/loginUser', { email, password })
        const { ok, message } = response
        return { ok, message }
    }

    const logout = () => {
        store.dispatch('auth/logoutUser')
        store.commit('journal/clearEntries')
    }

    const register = async (user) => {
        const response = await store.dispatch('auth/registerUser', user)
        const { ok, message } = response
        return { ok, message }
    }

    const checkStatus = async () => await store.dispatch('auth/checkSessionStatus')

    return {
        login,
        logout,
        register,
        checkStatus,
        authStatus: computed(() => store.getters['auth/currentState']),
        username: computed(() => store.getters['auth/username'])
    }
}

export default useAuth