<script setup lang="ts">
import type { Author } from '@/types/author'

defineProps<{
    author: Author
}>()
</script>

<template>
    <article class="author-card">
        <img class="author-card__image" :src="author.imageUrl" :alt="author.name" />
        <div class="author-card__info">
            <h3 class="author-card__name">{{ author.name }}</h3>
            <div class="author-card__details">
                <p class="author-card__birth-year">{{ author.birthYear }}</p>
                <p v-for="work in author.notableWorks" :key="work" class="author-card__work">{{ work }}</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
.author-card {
    display: flex;
    justify-content: flex-start;
    gap: var(--space-1);
}

.author-card__image {
    width: 12rem;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    object-position: top;
    flex-shrink: 0;
}

.author-card__info {
    width: 12rem;
    padding: var(--space-4) var(--space-2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
    border-left: 1px solid var(--color-primary);
}

.author-card__details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-2);
}

.author-card__name {
    font-family: var(--ff-primary);
    font-size: var(--fs-4);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-primary);
}

.author-card__birth-year,
.author-card__work {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: lighter;
    color: var(--color-text);
}

@media (max-width: 768px) {

    .book-card__image,
    .book-card__info,
    .author-card__image,
    .author-card__info {
        width: 9rem;
    }

    .book-card__info,
    .author-card__info {
        padding: var(--space-3) var(--space-2);
        gap: var(--space-3);
    }

    .book-card__title,
    .author-card__name,
    .book-card__authors,
    .book-card__year,
    .book-card__genre,
    .author-card__birth-year,
    .author-card__work {
        font-size: var(--fs-5);
    }
}

@media (max-width: 480px) {

    .book-card__image,
    .book-card__info,
    .author-card__image,
    .author-card__info {
        width: 7.5rem;
    }
}
</style>