<template>
    <div class="d-flex justify-content-center">
        <h2 class="align-self-center">No ha seleccionado ninguna entrada</h2>
    </div>
    <FABComponent />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        FABComponent: defineAsyncComponent(() => import('../components/FABComponent.vue'))
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>