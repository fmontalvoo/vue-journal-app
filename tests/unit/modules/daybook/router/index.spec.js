import router from '@/modules/daybook/router'

describe('Daybook router', () => {
    it('el router de daybook debe existir', () => {
        expect(router).toBeTruthy()
    })

    it('el router debe tener configurado las rutas', () => {
        expect(router).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'daybook-no-entry',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'daybook-entry',
                    props: expect.any(Function),
                    component: expect.any(Function)
                }
            ]
        })
    })

    it('debe cargar los componentes "EntryView" y "NoEntrySelectedView"', async () => {
        const routes = router.children.map(async route => (await route.component()).default.name)

        const components = await Promise.all(routes)

        expect(components).toContain('EntryView')
        expect(components).toContain('NoEntrySelectedView')
    })

    it('debe enviar el id por la ruta', () => {
        const route = {
            params: {
                id: 'Abc.123'
            }
        }

        const entry = router.children.find(route => route.name === 'daybook-entry')

        expect(entry.props(route)).toEqual(route.params)
    })
})