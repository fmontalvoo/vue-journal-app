<template>
    <NavbarComponent />
    <div v-if="loading" class="row justify-content-md-center">
        <div class="col-3 alert alert-info text-center mt-5">
            Espere por favor...
            <div class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </div>
        </div>
    </div>

    <div v-else class="d-flex">
        <div class="col-4">
            <EntryListComponent />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        NavbarComponent: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
        EntryListComponent: defineAsyncComponent(() => import('../components/EntryListComponent.vue')),
    },
    methods: {
        ...mapActions('journal', ['getEntries'])
    },
    computed: {
        ...mapState('journal', ['loading'])
    },
    created() {
        this.getEntries()
    }
}
</script>