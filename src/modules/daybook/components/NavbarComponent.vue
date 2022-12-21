<template>
    <nav class="navbar bg-dark">
        <router-link :to="{ name: 'daybook-no-entry' }" v-slot="{ href }">
            <a class="navbar-brand text-white" :href="href">
                <img class="d-inline-block align-text-top mx-2" width="24" src="@/assets/logo.png" alt="Logo">
                <span>Daybook: [{{ username }}]</span>
            </a>
        </router-link>

        <div class="d-flex">
            <button @click="onLogout" class="btn btn-outline-secondary mx-2">
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router';

import useAuth from '@/modules/auth/composables/useAuth';

export default {
    name: 'NavbarComponent',
    setup() {
        const router = useRouter()

        const { logout, username } = useAuth()

        return {
            username,
            onLogout() {
                logout()
                router.push({ name: 'auth-login' })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>