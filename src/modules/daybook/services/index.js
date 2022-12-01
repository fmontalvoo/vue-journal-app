import axios from 'axios'

const apiUrl = 'https://data-base-38d79.firebaseio.com'

const journalApi = axios.create({
    baseURL: apiUrl
})

export const getJournals = async () => {
    return await (await journalApi.get('/daybook.json')).data
}

export const getJournalEntry = async (id = '') => {
    return await (await journalApi.get(`/daybook/${id}.json`)).data
}