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
                {{ section.viewMore }}
            </RouterLink>
        </div>
        <div class="content-section__body">
            <p class="content-section__description">
                {{ section.description }}
            </p>
            <div class="content-section__books">
                <BookCard v-for="book in section.books" :key="book.id" :book="book" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.content-section {
    grid-column: 2 / 12;
    margin-bottom: var(--space-6);
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: auto 1fr;
}

.content-section__header {
    grid-column: 1 / 7;
    margin-right: var(--space-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-primary);
}

.content-section__body {
    grid-column: 1 / -1;
    margin-top: var(--space-4);
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--space-3);
}

.content-section__books {
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
}

.content-section__title {
    padding: var(--space-2) var(--space-3);
    font-family: var(--ff-primary);
    font-size: var(--fs-3);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-bg);
    background-color: var(--color-primary);
}

.content-section__more {
    padding: var(--space-1) var(--space-3);
    font-family: var(--ff-secondary);
    font-size: var(--fs-3);
    font-weight: normal;
    text-decoration: none;
    color: var(--color-secondary);
    background-color: transparent;
    border: 1px solid var(--color-secondary);
    transition:
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.content-section__more:hover {
    background-color: var(--color-secondary);
    color: var(--color-bg);
}

.content-section__description {
    font-family: var(--ff-secondary);
    font-size: var(--fs-3);
    font-weight: lighter;
    color: var(--color-text);
}
</style>