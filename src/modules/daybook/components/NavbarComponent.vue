<template>
    <nav class="navbar bg-dark">
        <router-link :to="{ name: 'daybook-no-entry' }" v-slot="{ href }">
            <a class="navbar-brand text-white" :href="href">
                <img class="d-inline-block align-text-top mx-2" width="24" src="@/assets/logo.png" alt="Logo">
                <span>Daybook</span>
            </a>
        </router-link>

        <div class="d-flex">
            <button class="btn btn-outline-secondary mx-2">
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>