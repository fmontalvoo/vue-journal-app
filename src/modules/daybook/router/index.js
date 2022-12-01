export default {
    name: 'daybook',
    component: () => import('../layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'daybook-no-entry',
            component: () => import('../views/NoEntrySelectedView.vue'),
        },
        {
            path: ':id',
            name: 'daybook-entry',
            props: route => ({ id: Number(isNaN(route?.params?.id) ? 0 : route.params.id) }),
            component: () => import('../views/EntryView.vue')
        }
    ]
}