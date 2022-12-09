export default {
    name: 'auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'auth-login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: 'register',
            name: 'auth-register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '',
            name: 'auth-default',
            redirect: { name: 'auth-login' }
        }
    ]
}