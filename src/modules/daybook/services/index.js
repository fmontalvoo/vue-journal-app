import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL
const cloudinaryUrl = process.env.VUE_APP_CLOUDINARY_URL

export const journalApi = axios.create({
    baseURL: apiUrl
})

journalApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('idToken')

    config.params = {
        auth: token
    }

    return config
})

export const create = async (entry) => {
    return await (await journalApi.post('/daybook.json', entry)).data
}

export const getById = async (id = '') => {
    return await (await journalApi.get(`/daybook/${id}.json`)).data
}

export const update = async (id = '', entry) => {
    return await (await journalApi.put(`/daybook/${id}.json`, entry)).data
}

export const remove = async (id = '') => {
    return await journalApi.delete(`/daybook/${id}.json`)
}

export const getAll = async () => {
    return await (await journalApi.get('/daybook.json')).data
}

export const uploadImage = async (file) => {
    if (!file) return null

    try {
        console.info('Uploading image')
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'vue_app')
        const { data } = await axios.post(cloudinaryUrl, formData)
        return data.secure_url
    } catch (e) {
        console.error(e)
        return null
    }
}