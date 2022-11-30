<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">1</span>
            <span class="mx-1 fs-3">2</span>
            <span class="mx-2 fs-4 fw-light">3</span>
        </div>

        <div>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>

            <button class="btn btn-danger mx-2">
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedió hoy?"></textarea>
    </div>

    <FABComponent icon="fa-save" />

    <img class="img-thumbnail" src="@/assets/logo.png" alt="" />

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
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 0.2);
}
</style>