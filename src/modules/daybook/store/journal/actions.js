import { getJournals } from '@/modules/daybook/services';

export const getEntries = async (context) => {
    context.state.isLoading = true
    const data = await getJournals()
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id],
        })
    }
    context.commit('setEntries', entries)
}

export const createEntry = async (/*context*/) => {
}

export const updateEntry = async (/*context*/) => {
}