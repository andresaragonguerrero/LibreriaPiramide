<script setup lang="ts">
import type { Book } from '@/types/book'

defineProps<{
    book: Book
}>()
</script>

<template>
    <article class="book-card">
        <img class="book-card__image" :src="book.coverUrl" :alt="book.title" />
        <div class="book-card__info">
            <h3 class="book-card__title">{{ book.title }}</h3>
            <div class="book-card__details">
                <p class="book-card__authors">{{ book.authors.join(', ') }}</p>
                <p class="book-card__year">{{ book.publishedYear }}</p>
                <p class="book-card__genre">{{ book.genre }}</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
.book-card {
    display: flex;
    justify-content: flex-start;
    gap: var(--space-1);
}

.book-card__image {
    width: 12rem;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    flex-shrink: 0;
}

.book-card__info {
    width: 12rem;
    padding: var(--space-4) var(--space-2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
    border-left: 1px solid var(--color-primary);
}

.book-card__details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-2);
}

.book-card__title {
    font-family: var(--ff-primary);
    font-size: var(--fs-4);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-primary);
}

.book-card__authors,
.book-card__year,
.book-card__genre {
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
        font-weight: normal;
    }

    .book-card__title {
        font-weight: bold;
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