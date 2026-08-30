<script setup lang="ts">
import { ref } from 'vue';
import type { ContentSection } from '@/types/content-section';
import BookCard from '@/components/BookCard.vue';
import AuthorCard from '@/components/AuthorCard.vue';

defineProps<{
    section: ContentSection;
}>();

const scrollContainer = ref<HTMLElement | null>(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

function onPointerDown(event: PointerEvent) {
    if (!scrollContainer.value) return;
    isDragging = true;
    startX = event.clientX;
    scrollLeft = scrollContainer.value.scrollLeft;
    scrollContainer.value.setPointerCapture(event.pointerId);
}

function onPointerMove(event: PointerEvent) {
    if (!isDragging || !scrollContainer.value) return;
    scrollContainer.value.scrollLeft = scrollLeft - (event.clientX - startX);
}

function onPointerUp(event: PointerEvent) {
    isDragging = false;
    scrollContainer.value?.releasePointerCapture(event.pointerId);
}
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
            <div class="content-section__books" ref="scrollContainer" @pointerdown="onPointerDown"
                @pointermove="onPointerMove" @pointerup="onPointerUp" @pointerleave="onPointerUp">
                <template v-if="section.type === 'authors'">
                    <AuthorCard v-for="author in section.items" :key="author.id" :author="author" />
                </template>
                <template v-else>
                    <BookCard v-for="book in section.items" :key="book.id" :book="book" />
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content-section {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: auto 1fr;
}

.content-section__header {
    grid-column: 1 / 7;
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
    overflow-x: hidden;
    overflow-y: hidden;
    cursor: grab;
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
}

.content-section__books:active {
    cursor: grabbing;
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