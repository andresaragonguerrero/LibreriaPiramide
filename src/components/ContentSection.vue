<script setup lang="ts">
import type { ContentSection } from '@/types/content-section';

defineProps<{
    section: ContentSection;
}>();
</script>

<template>
    <section class="content-section" :id="section.id">
        <h2>{{ section.title }}</h2>
        <p>{{ section.description }}</p>
        <RouterLink class="content-section__more" :to="{ name: 'book-search', query: { type: section.type } }">
            {{ section.viewMore }}
        </RouterLink>
    </section>
</template>

<style scoped>
.content-section {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
}
</style>