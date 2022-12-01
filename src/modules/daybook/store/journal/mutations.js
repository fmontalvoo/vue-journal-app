export const addEntry = (state, entry) => {
    state.isLoading = false
    state.entries.unshift({ ...entry })
}

export const updateEntry = (state, entry) => {
    state.isLoading = false
    const pos = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries.splice(pos, 1, entry)
}

export const removeEntry = (state, id) => {
    state.isLoading = false
    const pos = state.entries.map(e => e.id).indexOf(id)
    state.entries.splice(pos, 1)
}

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}
