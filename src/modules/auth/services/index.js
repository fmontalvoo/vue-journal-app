import axios from 'axios'

// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

const apiKey = process.env.VUE_APP_FIREBASE_API_KEY
const authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts'

const authApi = axios.create({
    baseURL: authUrl,
    params: {
        key: apiKey
    }
})

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