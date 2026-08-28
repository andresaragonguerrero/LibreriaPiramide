<script setup lang="ts">
import type { ContentSection } from '@/types/content-section';

defineProps<{
    section: ContentSection;
}>();
</script>

<template>
    <section class="content-section" :id="section.id">
        <div class="content-section__header">
            <h2 class="content-section__title">{{ section.title }}</h2>
            <RouterLink class="content-section__more" :to="{ name: 'book-search', query: { type: section.type } }">
                {{ section.viewMore }}
            </RouterLink>
        </div>
        <div class="content-section__body">
            <p>{{ section.description }}</p>
        </div>
    </section>
</template>

<style scoped>
.content-section {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
}
</style>