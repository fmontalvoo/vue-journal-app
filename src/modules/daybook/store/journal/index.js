import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const journalModule = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}

export default journalModule