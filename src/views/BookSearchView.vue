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
            <div class="" v-if="totalBooks === 0">
                <p class="results__answer-text">No se han encontrado libros.</p>
            </div>

            <template class="" v-else>
                <div class="">
                    <p class="results__answer-text">{{ totalBooksText }}</p>
                </div>

                <BookCard v-for="book in paginatedBooks" :key="book.id" :book="book" />

                <BookPagination :current-page="currentPage" :total-pages="totalPages" @prev="prevPage"
                    @next="nextPage" />
            </template>
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
}
</style>