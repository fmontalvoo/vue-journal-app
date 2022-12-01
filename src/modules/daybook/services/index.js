import axios from 'axios'

const apiUrl = 'https://data-base-38d79.firebaseio.com'

const journalApi = axios.create({
    baseURL: apiUrl
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
