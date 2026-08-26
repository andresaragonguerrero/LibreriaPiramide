<script setup lang="ts">

</script>

<template>
    <section class="hero">
        <div class="hero__column-left"></div>
        <div class="hero__column-right"></div>
    </section>
</template>

<style scoped>
.hero {
    grid-column: 1 / -1;
    height: calc(100dvh - var(--header-height));
    padding: var(--space-1) 0;
    display: grid;
    grid-template-columns: subgrid;
}

.hero__column-left {
    grid-column: 2 / 8;
    background-color: red;
}

.hero__column-right {
    grid-column: 8 / 12;
    background-color: blue;
}
</style>