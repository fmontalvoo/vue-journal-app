export const getEntriesByQuery = (state) => (query = '') => {
    if (query.length > 0)
        return state.entries
            .filter(
                entry => entry.text.toLowerCase().includes(query.toLowerCase())
            )

    return state.entries
}

export const getEntryById = (state) => (id = '') => {
    if (!id) return null

    const entry = state.entries.find(entry => entry.id === id)

    if (!entry) return null

    return { ...entry }
}

export const isLoading = (state) => {
    return state.loading
}