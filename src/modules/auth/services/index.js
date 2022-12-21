import axios from 'axios'

// https://firebase.google.com/docs/reference/rest/auth

const apiKey = process.env.VUE_APP_FIREBASE_API_KEY
const authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts'

const authApi = axios.create({
    baseURL: authUrl,
    params: {
        key: apiKey
    }
})

export const login = async (email, password) => {
    try {
        const { data } = await authApi.post(':signInWithPassword', {
            email,
            password,
            returnSecureToken: true
        })
        const { idToken, refreshToken, displayName } = data

        const credentials = {
            idToken,
            refreshToken,
            user: {
                email,
                name: displayName,
            }
        }

        return {
            ok: true,
            credentials,
            message: 'User successfully logged in'
        }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const create = async (user) => {
    const { email, password } = user

    try {
        const { data } = await authApi.post(':signUp', {
            email,
            password,
            returnSecureToken: true
        })

        const { idToken, refreshToken } = data

        const { displayName: name } = await update(idToken, user)

        const credentials = {
            idToken,
            refreshToken,
            user: {
                name,
                email,
            }
        }

        return {
            ok: true,
            credentials,
            message: 'User created successfully'
        }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const update = async (idToken, user) => {
    const { name } = user

    const { data: response } = await authApi.post(':update', {
        idToken,
        displayName: name,
    })

    return response
}

export const getUser = async (idToken) => {
    try {
        const { data } = await authApi.post(':lookup', { idToken })

        const { displayName: name, email } = data.users[0]

        return {
            ok: true,
            user: { name, email },
            message: 'User successfully retrieved'
        }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}