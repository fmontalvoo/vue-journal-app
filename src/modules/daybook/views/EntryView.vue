<template>
    <div v-if="entry" class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ monthName }}</span>
            <span class="mx-2 fs-4 fw-light">{{ `${year}, ${dayName}` }}</span>
        </div>

        <div>
            <input type="file" accept="image/png, image/jpeg" ref="inputFile" v-show="false" @change="onSelectImage" />

            <button class="btn btn-primary" @click="selectFile">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>

            <button v-if="entry.id" class="btn btn-danger mx-2" @click="removeEntry">
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedió hoy?" v-model="entry.text"></textarea>
    </div>

    <img v-if="entry?.image" class="img-thumbnail" src="@/assets/logo.png" alt="" />
    <img v-if="selectedImage" class="img-thumbnail" :src="selectedImage" />

    <FABComponent @on:click="saveEntry" icon="fa-save" />

</template>

<script>
import Swal from 'sweetalert2'
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import { dayName, monthName, day, year } from '@/modules/daybook/utils'

export default {
    components: {
        FABComponent: defineAsyncComponent(() => import('../components/FABComponent.vue'))
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            file: null,
            entry: null,
            selectedImage: null,
        }
    },
    created() {
        this.findEntryById()
    },
    watch: {
        id() {
            this.findEntryById()
        }
    },
    methods: {
        ...mapActions('journal', ['createEntry', 'updateEntry', 'deleteEntry']),
        saveEntry() {
            if (this.entry.text.trim()) {
                if (this.entry.id)
                    this.updateEntry(this.entry)
                else
                    this.createEntry(this.entry)

                Swal.fire({
                    title: 'Entrada guardada',
                    text: "Acaba de registrar una nueva entrada",
                    icon: 'success',
                    allowOutsideClick: false,
                    confirmButtonColor: '#354952',
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed)
                        if (!this.entry.id)
                            this.$router.push({ name: 'daybook-no-entry' })
                        else
                            this.$router.push({ name: 'daybook-entry', params: { id: this.entry.id } })
                })
            }

        },
        findEntryById() {
            let entryData;

            if (this.id === 'new') {
                entryData = {
                    text: '',
                    date: new Date().getTime(),
                }
            } else {
                entryData = this.getEntryById(this.id)
                if (!entryData) this.$router.push({ name: 'daybook-no-entry' })
            }

            this.entry = entryData
        },
        removeEntry() {
            if (this.entry.id) {
                Swal.fire({
                    title: 'Esta seguro?',
                    text: "Una vez eliminada la entrada, no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#354952',
                    cancelButtonColor: '#dc3545',
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar',
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        this.deleteEntry(this.id)
                        this.$router.push({ name: 'daybook-no-entry' })
                    }
                })

            }
        },
        onSelectImage(event) {
            const file = event.target.files[0]
            if (!file) {
                this.selectedImage = null
                this.file = null
                return
            }

            this.file = file
            const fr = new FileReader()
            fr.readAsDataURL(this.file)
            fr.onload = () => this.selectedImage = fr.result
        },
        selectFile() {
            // console.log(this.$refs)
            this.$refs.inputFile.click()
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        dayName() {
            return dayName(this.entry.date)
        },
        monthName() {
            return monthName(this.entry.date)
        },
        year() {
            return year(this.entry.date)
        },
        day() {
            return day(this.entry.date)
        },
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 0.2);
}
</style>