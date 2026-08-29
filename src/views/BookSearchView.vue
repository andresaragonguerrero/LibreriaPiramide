<script setup lang="ts">
import BookFilters from '@/components/BookFilters.vue'
import BookCard from '@/components/BookCard.vue'
import BookPagination from '@/components/BookPagination.vue'
import { useBookSearch } from '@/composables/useBookSearch'

const {
    title,
    author,
    year,
    subject,
    genre,
    sortBy,
    sortOrder,
    currentPage,
    subjects,
    genres,
    paginatedBooks,
    totalBooks,
    totalPages,
    totalBooksText,
    resetFilters,
    prevPage,
    nextPage,
} = useBookSearch(5)
</script>

<template>
    <div class="book-search-view">
        <BookFilters v-model:title="title" v-model:author="author" v-model:year="year" v-model:subject="subject"
            v-model:genre="genre" v-model:sortBy="sortBy" v-model:sortOrder="sortOrder" :subjects="subjects"
            :genres="genres" @reset="resetFilters" />

        <section class="results">
            <div class="results__empty" v-if="totalBooks === 0">
                <p class="results__answer-text">No se han encontrado libros.</p>
            </div>

            <article class="results__books" v-else>
                <div class="results__header">
                    <p class="results__answer-text">{{ totalBooksText }}</p>
                </div>

                <div class="results__list">
                    <BookCard v-for="book in paginatedBooks" :key="book.id" :book="book" />
                </div>

                <div class="results__pagination">
                    <BookPagination :current-page="currentPage" :total-pages="totalPages" @prev="prevPage"
                        @next="nextPage" />
                </div>
            </article>
        </section>
    </div>
</template>

<style lang="css" scoped>
.book-search-view {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
}

.results {
    grid-column: 6 / 12;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.results__books {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-2);
}

.results__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--space-2);
}

.results__answer-text {
    font-family: var(--ff-primary);
    font-size: var(--fs-4);
    font-weight: bold;
    color: var(--color-text);
}

.results__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
}

.results__pagination {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>