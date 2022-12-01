<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" v-model="query" class="form-control" placeholder="Buscar entrada">
        </div>
        <div class="entry-scrollarea">
            <EntryComponent v-for="entry in findEntriesByQuery" :key="entry.id" :entry="entry" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        EntryComponent: defineAsyncComponent(() => import('./EntryComponent.vue'))
    },
    data() {
        return {
            query: ''
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntriesByQuery']),
        findEntriesByQuery() {
            return this.getEntriesByQuery(this.query)
        }
    },
}
</script>

<style lang="scss" scoped>
.entry-list-container {
    height: calc(100vh - 56px);
    border-right: 1px solid #2c3e50;
}

.entry-scrollarea {
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: calc(100vh - 120px);
}

.entry-scrollarea::-webkit-scrollbar {
    display: none;
}
</style>