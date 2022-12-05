import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'

import { journalState } from '../../mock/mock.journal.state'

const createVuexStore = (initialState) => createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialState }
        },
    }
})

describe('Vuex - Journal module', () => {
    it('Debe cargar el estado inicial de journal', () => {
        const store = createVuexStore(journalState)

        const { loading, entries } = store.state.journal;

        expect(loading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    })

    describe('Vuex - Mutations', () => {
        it('mutation: setEntries', () => {
            const store = createVuexStore({ isLoading: true, entries: [] })

            store.commit('journal/setEntries', journalState.entries)

            expect(store.state.journal.entries.length).toBe(2)
            expect(store.state.journal.loading).toBeFalsy()
        })

        it('mutation: updateEntry', () => {
            const store = createVuexStore(journalState)

            const entry = {
                ...journalState.entries[0],
                text: "Hello world!!!"
            }

            store.commit('journal/updateEntry', entry)

            expect(store.state.journal.entries.length).toBe(2)
            expect(store.state.journal.loading).toBeFalsy()

            expect(journalState.entries[0].text).toEqual('Hello world!!!')
        })

        it('mutation: addEntry', () => {
            const store = createVuexStore(journalState)

            const entry = {
                id: "-NIG7DB_ert91KFrE_UE",
                date: 1670277186818,
                image: "https://res.cloudinary.com/drkmejmbw/image/upload/v1670038210/vue-journal/jzcs6qmbs8rfcxz1turr.png",
                text: "Hello world!!!"
            }

            store.commit('journal/addEntry', entry)

            expect(store.state.journal.entries.length).toBe(3)
            expect(store.state.journal.loading).toBeFalsy()

            const found = store.state.journal.entries.find(e => entry.id === entry.id)

            expect(found).toEqual(entry)
        })

        it('mutation: removeEntry', () => {
            const id = '-NIG7DB_ney91KkIR_IE'
            const store = createVuexStore(journalState)

            expect(store.state.journal.entries.length).toBe(3)

            store.commit('journal/removeEntry', id)

            expect(store.state.journal.entries.length).toBe(2)
            expect(store.state.journal.loading).toBeFalsy()

            const found = store.state.journal.entries.find(e => e.id === id)

            expect(found).toBeFalsy()
        })
    })

    describe('Vuex - Getters', () => {
        it('getter: getEntriesByQuery', () => {
            const store = createVuexStore(journalState)

            const found = store.getters['journal/getEntriesByQuery']('hola')

            expect(found[0]).toBeTruthy()
            expect(found.length).toBe(1)

            expect(found[0].text).toBe('Hola mundo...')
        })

        it('getter: getEntryById', () => {
            const store = createVuexStore(journalState)

            const found = store.getters['journal/getEntryById']('-NIG7DB_ert91KFrE_UE')

            expect(found).toBeTruthy()

            expect(found.text).toBe('Hello world!!!')
        })

        it('getter: isLoading', () => {
            const store = createVuexStore(journalState)

            const loading = store.getters['journal/isLoading']

            expect(loading).toBeFalsy()
        })
    })
})