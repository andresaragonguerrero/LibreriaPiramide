<script setup lang="ts">
import type { Book } from '@/types/book'

defineProps<{
    book: Book
}>()
</script>

<template>
    <article>
        <img :src="book.coverUrl" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p>{{ book.authors.join(', ') }}</p>
        <p>{{ book.publishedYear }}</p>
        <p>{{ book.genre }}</p>
    </article>
</template>