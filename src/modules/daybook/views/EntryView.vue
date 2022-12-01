<template>
    <div v-if="entry" class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ monthName }}</span>
            <span class="mx-2 fs-4 fw-light">{{ `${year}, ${dayName}` }}</span>
        </div>

        <div>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>

            <button class="btn btn-danger mx-2" @click="removeEntry">
                <i class="fa fa-trash-alt"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedió hoy?" v-model="entry.text"></textarea>
    </div>

    <img v-if="entry?.image" class="img-thumbnail" src="@/assets/logo.png" alt="" />

    <FABComponent @on:click="saveEntry" icon="fa-save" />

</template>

<script>
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
            entry: null,
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
            if (this.entry.id)
                this.updateEntry(this.entry)
            else
                this.createEntry(this.entry)
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
                this.deleteEntry(this.id)
                this.$router.push({ name: 'daybook-no-entry' })
            }
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