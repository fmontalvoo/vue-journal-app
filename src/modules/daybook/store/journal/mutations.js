export const addEntry = (/*state*/) => {

}

export const updateEntry = (state, entry) => {
    state.isLoading = false
    const pos = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries.splice(pos, 1, entry)
}

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}
