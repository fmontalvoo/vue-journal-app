import { useStore } from 'vuex'

const useAuth = () => {
    const store = useStore()

    const createUser = async (user) => {
        const response = await store.dispatch('auth/createUser', user)
        const { ok, message } = response
        return { ok, message }
    }

    return {
        createUser,
    }
}

export default useAuth