import { create, update, remove, getAll } from '@/modules/daybook/services';

export const createEntry = async ({ commit, state }, entry) => {
    state.isLoading = true
    const { name: id } = await create(entry)
    commit('addEntry', { id, ...entry })
}

export const updateEntry = async ({ commit, state }, entry) => {
    state.isLoading = true
    const { id, ...entryData } = entry
    const updatedEntry = await update(id, entryData)
    commit('updateEntry', { id, ...updatedEntry })
}

export const deleteEntry = async ({ commit, state }, id) => {
    state.isLoading = true
    await remove(id)
    commit('removeEntry', id)
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