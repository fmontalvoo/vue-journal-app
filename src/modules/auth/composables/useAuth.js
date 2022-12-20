import { useStore } from 'vuex'

const useAuth = () => {
    const store = useStore()

    const login = async ({ email, password }) => {
        const response = await store.dispatch('auth/loginUser', { email, password })
        const { ok, message } = response
        return { ok, message }
    }

    const register = async (user) => {
        const response = await store.dispatch('auth/registerUser', user)
        const { ok, message } = response
        return { ok, message }
    }

    return {
        login,
        register,
    }
}

export default useAuth