import { update, getAll } from '@/modules/daybook/services';

export const createEntry = async (/*context*/) => {
}

export const updateEntry = async ({ commit, state }, entry) => {
    state.isLoading = true
    const { id, ...entryData } = entry
    const updatedEntry = await update(id, entryData)
    commit('updateEntry', { id, ...updatedEntry })
}

export const getEntries = async (context) => {
    context.state.isLoading = true
    const data = await getAll()
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id],
        })
    }
    context.commit('setEntries', entries)
}