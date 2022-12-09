import { createStore } from 'vuex'

import auth from '@/modules/auth/store'
import journal from '@/modules/daybook/store/journal'

export default createStore({
    modules: {
        auth,
        journal,
    }
})