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
    <main>
        <h1>Books</h1>

        <BookFilters v-model:title="title" v-model:author="author" v-model:year="year" v-model:subject="subject"
            v-model:genre="genre" v-model:sortBy="sortBy" v-model:sortOrder="sortOrder" :subjects="subjects"
            :genres="genres" @reset="resetFilters" />

        <section>
            <h2>Resultados</h2>

            <p v-if="totalBooks === 0">No se han encontrado libros.</p>

            <template v-else>
                <p>{{ totalBooksText }}</p>

                <BookCard v-for="book in paginatedBooks" :key="book.id" :book="book" />

                <BookPagination :current-page="currentPage" :total-pages="totalPages" @prev="prevPage"
                    @next="nextPage" />
            </template>
        </section>
    </main>
</template>