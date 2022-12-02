<template>
    <div class="d-flex justify-content-center">
        <h2 class="align-self-center">No ha seleccionado ninguna entrada</h2>
    </div>
    <FABComponent @on:click="createEntry" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'NoEntrySelectedView',
    components: {
        FABComponent: defineAsyncComponent(() => import('../components/FABComponent.vue'))
    },
    methods: {
        createEntry() {
            this.$router.push({ name: 'daybook-entry', params: { id: 'new' } })
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>