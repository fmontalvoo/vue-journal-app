<template>
    <div class="entry-container pointer p-2" @click="$router.push({ name: 'daybook-entry', params: { id: entry.id } })">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-5">{{ monthName }}</span>
            <span class="mx-2 fw-light">{{ `${year}, ${dayName}` }}</span>
        </div>

        <div class="entry-description">
            {{ trimmedText }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    methods: {
        capitalizeText(str = '') {
            return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        },
        localDateStr(date, format = {}, locale = 'es-EC') {
            return new Date(date).toLocaleDateString(locale, format)
        }
    },
    computed: {
        trimmedText() {
            if (this.entry.text.length > 130)
                return this.entry.text.slice(0, 130).concat('...')
            return this.entry.text
        },
        dayName() {
            return this.capitalizeText(
                this.localDateStr(this.entry.date, { weekday: 'long' })
            )
        },
        monthName() {
            return this.capitalizeText(
                this.localDateStr(this.entry.date, { month: 'long' })
            )
        },
        day() {
            const currentDay = new Date(this.entry.date).getDate()
            return currentDay <= 9
                ? `0${currentDay}`
                : currentDay
        },
        year() {
            return new Date(this.entry.date).getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}

.entry-container {
    transition: 0.2s all ease-in;
    border-bottom: 1px solid #2c3e50;

    &:hover {
        transition: 0.2s all ease-in;
        background-color: lighten($color: grey, $amount: 35);
    }
}

.entry-description {
    font-size: 12px;
}
</style>