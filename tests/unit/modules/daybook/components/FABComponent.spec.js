import { shallowMount } from '@vue/test-utils'

import FABComponent from '@/modules/daybook/components/FABComponent.vue'

describe('FABComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(FABComponent)
    })

    test('El componente FABComponent debe crearse', () => {
        expect(wrapper).toBeTruthy()
    })

    it('debe mostrar el icono por defecto', () => {
        const icon = wrapper.find('.fa-plus')

        expect(icon.exists()).toBeTruthy()
    })

    it('debe mostrar el icono que venga desde las props', async () => {
        await wrapper.setProps({
            icon: 'fa-save'
        })

        const i = wrapper.find('i')

        expect(i.classes('fa-save')).toBeTruthy()
    })

    it('debe emitir el evento "on:click" cuando se hace click sobre el boton', async () => {
        const button = wrapper.find('button')

        await button.trigger('click')

        // console.info(wrapper.emitted())

        expect(wrapper.emitted()).toHaveProperty('on:click')
    })
})