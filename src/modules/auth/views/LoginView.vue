<template>
    <span class="login100-form-title p-b-41">
        Ingresa
    </span>
    <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">

        <div class="wrap-input100 validate-input">
            <input v-model="loginForm.email" class="input100" type="email" placeholder="Correo" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input">
            <input v-model="loginForm.password" class="input100" type="password" placeholder="Contraseña" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn">
                Ingresar
            </button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'auth-register' }">¿No tienes cuenta?</router-link>
        </div>
    </form>
</template>
  
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Swal from 'sweetalert2'

import useAuth from '../composables/useAuth'
export default {
    setup() {
        const router = useRouter()

        const { login } = useAuth()

        const loginForm = ref({
            email: '',
            password: ''
        })

        return {
            loginForm,
            onSubmit: () => {
                login(loginForm.value)
                    .then(() => {
                        router.push({ name: 'daybook-no-entry' })
                    }).catch((error) => {
                        Swal.fire('Error', error, 'error')
                    })
            }
        }
    }
}
</script>