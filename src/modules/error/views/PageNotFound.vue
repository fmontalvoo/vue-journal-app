<template>
    <div class="d-flex justify-content-center">
        <div class="align-self-center">
            <h2>Error 404</h2>
            <p class="text-center">Page not found</p>
            <div class="text-center">
                <button class="btn btn-primary" @click="goBack">Regresar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style>

</style>