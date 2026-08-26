<script setup lang="ts">
import Hero from '@/components/Hero.vue';
</script>

<template>
    <div class="landing-view">
        <Hero />
    </div>
</template>

<style scoped>
.landing-view {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
}
</style>