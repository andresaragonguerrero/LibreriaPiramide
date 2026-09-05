<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { ContentSection } from '@/types/content-section';
import BookCard from '@/components/BookCard.vue';
import AuthorCard from '@/components/AuthorCard.vue';

defineProps<{
    section: ContentSection;
}>();

const scrollContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

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

function scrollByAmount(amount: number) {
    scrollContainer.value?.scrollBy({ left: amount, behavior: 'smooth' });
}

function updateScrollLimits() {
    const el = scrollContainer.value;
    if (!el) return;
    canScrollLeft.value = el.scrollLeft > 0;
    canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
}

onMounted(() => {
    updateScrollLimits();
    scrollContainer.value?.addEventListener('scroll', updateScrollLimits);
    window.addEventListener('resize', updateScrollLimits);
});

onUnmounted(() => {
    scrollContainer.value?.removeEventListener('scroll', updateScrollLimits);
    window.removeEventListener('resize', updateScrollLimits);
});
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

            <div class="carousel-wrapper">
                <button type="button" class="carousel-btn carousel-btn--left" aria-label="Anterior"
                    :disabled="!canScrollLeft" @click="scrollByAmount(-400)">&lt;</button>

                <div class="content-section__books" ref="scrollContainer" @pointerdown="onPointerDown"
                    @pointermove="onPointerMove" @pointerup="onPointerUp" @pointerleave="onPointerUp">
                    <template v-if="section.type === 'authors'">
                        <AuthorCard v-for="author in section.items" :key="author.id" :author="author" />
                    </template>
                    <template v-else>
                        <BookCard v-for="book in section.items" :key="book.id" :book="book" />
                    </template>
                </div>

                <button type="button" class="carousel-btn carousel-btn--right" aria-label="Siguiente"
                    :disabled="!canScrollRight" @click="scrollByAmount(400)">&gt;</button>
            </div>

        </div>
    </section>
</template>

<style scoped>
.carousel-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: block;
}

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
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
    cursor: grab;
    touch-action: pan-y;
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

.carousel-btn {
    height: 3.5rem;
    width: 3.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid transparent;
    border: none;
    border-radius: var(--border-radius-md);
    color: var(--color-primary);
    background-color: var(--color-secondary);
    cursor: pointer;
    font-size: var(--fs-3);
    transition:
        outline 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.carousel-btn:hover {
    outline: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    background-color: var(--color-primary);
}

.carousel-btn--left {
    left: var(--space-2);
}

.carousel-btn--right {
    right: var(--space-2);
}

.carousel-btn:disabled {
    opacity: 0.4;
}

@media (max-width: 1250px) {
    .content-section {
        grid-column: 1 / -1;
        padding: 0 var(--space-2);
    }

    .content-section__header {
        grid-column: 1 / -1;
    }
}

@media (max-width: 1024px) {
    .carousel-btn {
        height: 2.75rem;
        width: 2.75rem;
    }
}

@media (max-width: 768px) {

    .content-section__title,
    .content-section__more {
        font-size: var(--fs-4);
    }

    .content-section__description {
        font-size: var(--fs-4);
    }

    .content-section__books {
        gap: var(--space-3);
    }

    .carousel-btn--left {
        left: 0;
    }

    .carousel-btn--right {
        right: 0;
    }
}

@media (max-width: 480px) {
    .content-section__header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-1);
        border-bottom: none;
    }

    .content-section__title {
        width: 100%;
    }

    .content-section__more {
        width: 100%;
        text-align: center;
    }

    .carousel-btn {
        height: 2.25rem;
        width: 2.25rem;
        font-size: var(--fs-5);
    }
}
</style>