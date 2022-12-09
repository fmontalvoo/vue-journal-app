<template>
    <span class="login100-form-title p-b-41">
        Registrate
    </span>
    <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">

        <div class="wrap-input100 validate-input">
            <input v-model="registerForm.name" class="input100" type="text" placeholder="Nombre" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input">
            <input v-model="registerForm.email" class="input100" type="email" placeholder="Correo" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input">
            <input v-model="registerForm.password" class="input100" type="password" placeholder="Contraseña" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn">
                Registrarse
            </button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'auth-login' }">¿Ya tienes una cuenta?</router-link>
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

        const { createUser } = useAuth()

        const registerForm = ref({
            name: '',
            email: '',
            password: ''
        })

        return {
            registerForm,
            onSubmit: async () => {
                const { ok, message } = await createUser(registerForm.value)
                if (ok) {
                    Swal.fire('Success', message, 'success')
                    router.push({ name: 'daybook-no-entry' })
                }
                else {
                    Swal.fire('Error', message, 'error')
                }
            }
        }
    }
}
</script>