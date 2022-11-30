export default {
    name: 'error',
    component: () => import('../layouts/ErrorLayout.vue'),
    children: [
        {
            path: '404',
            name: 'error-404',
            component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound.vue')
        },
        {
            path: '',
            name: 'error-default',
            redirect: { name: 'error-404' }
        },
    ]
}