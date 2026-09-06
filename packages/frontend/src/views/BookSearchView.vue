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
    isLoading,
    error,
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
            <div class="state-message" v-if="isLoading">
                <span class="spinner" aria-hidden="true"></span>
                <p>Buscando libros...</p>
            </div>

            <div class="state-message state-message--error" v-else-if="error">
                <span class="state-icon" aria-hidden="true">!</span>
                <p>{{ error }}</p>
            </div>

            <div class="results__empty" v-else-if="totalBooks === 0">
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
    grid-column: 4 / 12;
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

.state-message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) 0;
    font-family: var(--ff-secondary);
    font-size: var(--fs-3);
    color: var(--color-text);
}

.spinner {
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid var(--color-secondary);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.state-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-bg);
    font-family: var(--ff-primary);
    font-weight: bold;
    font-size: var(--fs-3);
}

.state-message--error p {
    color: var(--color-primary);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 1850px) {
    .search-form {
        grid-column: 2 / 3;
    }

    .results,
    .results__books {
        width: 100%;
        align-items: stretch;
    }

    .results {
        grid-column: 3 / 12;
    }

    .results__list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        gap: var(--space-3);
    }
}

@media (max-width: 1250px) {
    .book-search-view {
        grid-column: 1 / -1;
        padding: 0 var(--space-2);
        gap: var(--space-2);
    }

    .search-form,
    .results {
        grid-column: 1 / -1;
    }
}
</style>