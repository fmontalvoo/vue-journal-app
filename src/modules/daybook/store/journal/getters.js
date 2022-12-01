export const getEntriesByQuery = (state) => (query = '') => {
    if (query.length > 0)
        return state.entries
            .filter(
                entry => entry.text.toLowerCase().includes(query.toLowerCase())
            )

    return state.entries
}

export const getEntryById = (state) => (id = 0) => {
    if (!id) return state.entries

    return state.entries.find(entry => entry.id === id)
}