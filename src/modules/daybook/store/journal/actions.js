import { create, update, remove, getAll } from '@/modules/daybook/services';

export const createEntry = async ({ commit, state }, entry) => {
    state.loading = true
    const { name: id } = await create(entry)
    commit('addEntry', { id, ...entry })
}

export const updateEntry = async ({ commit, state }, entry) => {
    state.loading = true
    const { id, ...entryData } = entry
    const updatedEntry = await update(id, entryData)
    commit('updateEntry', { id, ...updatedEntry })
}

export const deleteEntry = async ({ commit, state }, id) => {
    state.loading = true
    await remove(id)
    commit('removeEntry', id)
}

export const getEntries = async (context) => {
    context.state.loading = true
    const data = await getAll()
    const entries = []
    if (data) {
        for (let id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id],
            })
        }
    }
    context.commit('setEntries', entries)
}