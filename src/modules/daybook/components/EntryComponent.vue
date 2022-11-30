<template>
    <div class="entry-container pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">1</span>
            <span class="mx-1 fs-5">2</span>
            <span class="mx-2 fw-light">3</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero exercitationem aperiam, doloremque sit
            laboriosam eligendi. Nisi sint obcaecati quia inventore asperiores enim, eius magni ipsa quae officia
            dolorum magnam?
        </div>
    </div>
</template>

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

.entry-title {}

.entry-description {
    font-size: 12px;
}
</style>