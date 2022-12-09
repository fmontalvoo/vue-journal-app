<template>
    <span class="login100-form-title p-b-41">
        Ingresa
    </span>
    <form class="login100-form validate-form p-b-33 p-t-5">

        <div class="wrap-input100 validate-input">
            <input class="input100" type="text" placeholder="Correo" required>
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input">
            <input class="input100" type="password" placeholder="Contraseña" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">
                Ingresar
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'auth-register' }">¿No tienes cuenta?</router-link>
        </div>
    </form>
</template>
  
<script>
export default {

}
</script>