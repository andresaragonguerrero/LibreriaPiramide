<script setup lang="ts">
import type { ContentSection } from '@/types/content-section';
import BookCard from '@/components/BookCard.vue';

defineProps<{
    section: ContentSection;
}>();
</script>

<template>
    <section class="content-section" :id="section.id">
        <div class="content-section__header">
            <h2 class="content-section__title">{{ section.title }}</h2>
            <RouterLink class="content-section__more" :to="{ name: 'book-search', query: { type: section.type } }">
                [<span>{{ section.viewMore }}</span>]
            </RouterLink>
        </div>
        <div class="content-section__body">
            <p>{{ section.description }}</p>
            <div class="content-section__books">
                <BookCard v-for="book in section.books" :key="book.id" :book="book" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.content-section {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: 8dvh 1fr;
}

.content-section__header {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-section__body {
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--space-2);
}

.content-section__books {
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-2);
}

.content-section__title {
    font-family: var(--ff-primary);
    font-size: var(--fs-3);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-text);
}

.content-section__more {
    font-family: var(--ff-secondary);
    font-size: var(--fs-3);
    font-weight: lighter;
    color: var(--color-primary);
    text-decoration: none;
}
</style>