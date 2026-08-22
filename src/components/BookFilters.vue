<script setup lang="ts">
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
</script>

<template>
    <form @submit.prevent>
        <label for="title">Título</label>
        <input id="title" v-model="title" type="search" placeholder="Buscar por título" />

        <label for="author">Autor</label>
        <input id="author" v-model="author" type="search" placeholder="Buscar por autor" />

        <label for="year">Año</label>
        <input id="year" v-model="year" type="search" placeholder="Buscar por año" />

        <label for="subject">Tema</label>
        <select id="subject" v-model="subject">
            <option value="">Todos</option>
            <option v-for="item in subjects" :key="item" :value="item">{{ item }}</option>
        </select>

        <label for="genre">Género</label>
        <select id="genre" v-model="genre">
            <option value="">Todos</option>
            <option v-for="item in genres" :key="item" :value="item">{{ item }}</option>
        </select>

        <label for="sortBy">Ordenar por</label>
        <select id="sortBy" v-model="sortBy">
            <option value="relevance">Relevancia</option>
            <option value="title">Título</option>
            <option value="author">Autor</option>
            <option value="year">Año</option>
        </select>

        <label for="sortOrder">Orden</label>
        <select id="sortOrder" v-model="sortOrder">
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>

        <button type="button" @click="$emit('reset')">Limpiar filtros</button>
    </form>
</template>