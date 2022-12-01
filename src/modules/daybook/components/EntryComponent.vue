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
import { dayName, monthName, day, year } from '@/modules/daybook/utils'

export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        trimmedText() {
            if (this.entry.text.length > 130)
                return this.entry.text.slice(0, 130).trim().concat('...')
            return this.entry.text
        },
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