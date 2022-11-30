<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entrada">
        </div>
        <div class="entry-scrollarea">
            <EntryComponent v-for="i in 100" :key="i" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        EntryComponent: defineAsyncComponent(() => import('./EntryComponent.vue'))
    }
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