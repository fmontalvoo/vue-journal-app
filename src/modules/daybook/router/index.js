export default {
    name: 'daybook',
    component: () => import('../layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'daybook-no-entry',
            component: () => import('../views/NoEntrySelectedView.vue'),
        }
    ]
}