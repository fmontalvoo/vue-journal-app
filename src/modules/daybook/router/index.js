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
            props: route => ({ id: route.params.id }),
            component: () => import('../views/EntryView.vue')
        }
    ]
}