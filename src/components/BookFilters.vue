<script setup lang="ts">
import { ref } from 'vue'
import type { SortOption, SortOrder } from '@/types/book'

const title = defineModel<string>('title', { default: '' })
const author = defineModel<string>('author', { default: '' })
const year = defineModel<string>('year', { default: '' })
const subject = defineModel<string>('subject', { default: '' })
const genre = defineModel<string>('genre', { default: '' })
const sortBy = defineModel<SortOption>('sortBy', { default: 'relevance' })
const sortOrder = defineModel<SortOrder>('sortOrder', { default: 'asc' })

defineProps<{
    subjects: string[]
    genres: string[]
}>()

defineEmits<{
    reset: []
}>()

const isOpen = ref(false)
</script>

<template>
    <form class="search-form" :class="{ 'search-form--open': isOpen }" @submit.prevent>

        <button type="button" class="search-form__toggle" @click="isOpen = !isOpen">
            Filtrar {{ isOpen ? '▲' : '▼' }}
        </button>

        <div class="search-form__fields">
            <div class="search-form__field">
                <label class="search-form__label" for="title">Título</label>
                <input class="search-form__input" id="title" v-model="title" type="search"
                    placeholder="Buscar por título" />
            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="author">Autor</label>
                <input class="search-form__input" id="author" v-model="author" type="search"
                    placeholder="Buscar por autor" />

            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="year">Año</label>
                <input class="search-form__input" id="year" v-model="year" type="search" placeholder="Buscar por año" />
            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="subject">Tema</label>
                <select class="search-form__select" id="subject" v-model="subject">
                    <option class="search-form__option" value="">Todos</option>
                    <option class="search-form__option" v-for="item in subjects" :key="item" :value="item">{{ item }}
                    </option>
                </select>
            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="genre">Género</label>
                <select class="search-form__select" id="genre" v-model="genre">
                    <option class="search-form__option" value="">Todos</option>
                    <option class="search-form__option" v-for="item in genres" :key="item" :value="item">{{ item }}
                    </option>
                </select>
            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="sortBy">Ordenar por</label>
                <select class="search-form__select" id="sortBy" v-model="sortBy">
                    <option class="search-form__option" value="relevance">Relevancia</option>
                    <option class="search-form__option" value="title">Título</option>
                    <option class="search-form__option" value="author">Autor</option>
                    <option class="search-form__option" value="year">Año</option>
                </select>
            </div>

            <div class="search-form__field">
                <label class="search-form__label" for="sortOrder">Orden</label>
                <select class="search-form__select" id="sortOrder" v-model="sortOrder">
                    <option class="search-form__option" value="asc">Ascendente</option>
                    <option class="search-form__option" value="desc">Descendente</option>
                </select>
            </div>
        </div>

        <button type="button" class="reset-button" @click="$emit('reset')">Limpiar filtros</button>
    </form>
</template>

<style scoped>
.search-form {
    grid-column: 2 / 4;
    padding-top: var(--space-1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
}

.search-form__field {
    display: grid;
    gap: var(--space-1);
}

.search-form__label {
    font-family: var(--ff-secondary);
    font-size: var(--fs-5);
    font-weight: normal;
    text-transform: uppercase;
    color: var(--color-primary);
}

.search-form__input {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-text);
    border: none;
    border-bottom: 1px solid var(--color-text);
    outline: none;
    background-color: transparent;
}

.search-form__select {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-text);
    border: none;
    border-bottom: 1px solid var(--color-text);
    outline: none;
    background-color: transparent;
}

.search-form__option {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-text);
    background-color: var(--color-bg);
}

.reset-button {
    padding: var(--space-2) var(--space-3);
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    text-decoration: none;
    color: var(--color-text);
    background-color: var(--color-secondary);
    border: none;
    outline: 1px solid transparent;
    transition:
        outline 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.reset-button:hover {
    outline: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: var(--color-bg);
}

.search-form__toggle {
    display: none;
}

@media (max-width: 1250px) {
    .search-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-3);
        align-items: start;
    }

    .reset-button {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .search-form {
        grid-template-columns: 1fr;
    }

    .search-form__toggle {
        width: 100%;
        display: block;
        padding: var(--space-2) var(--space-3);
        font-family: var(--ff-secondary);
        font-size: var(--fs-4);
        color: var(--color-bg);
        background-color: var(--color-primary);
        border: none;
        cursor: pointer;
    }

    .search-form__fields {
        display: none;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-3);
        margin-top: var(--space-3);
    }

    .search-form--open .search-form__fields {
        display: grid;
    }

    .reset-button {
        width: 100%;
        margin-top: var(--space-3);
    }
}

@media (max-width: 480px) {
    .search-form__fields {
        grid-template-columns: 1fr;
    }
}
</style>