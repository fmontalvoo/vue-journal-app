import store from '@/store'

export const authGuard = async (to, from, next) => {
    const isAuthenticated = await store.dispatch('auth/checkSessionStatus')

    console.log('authGuard', isAuthenticated)

    if (isAuthenticated)
        next()
    else
        next({ name: 'auth-login' })
}