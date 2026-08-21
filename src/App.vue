<script setup lang="ts">
import { computed, ref } from 'vue'
import { getGenres, getSubjects, searchBooks } from '@/services/books/books.service'
import type { Book, SortOption } from '@/types/book'

const title = ref('')
const author = ref('')
const year = ref('')
const subject = ref('')
const genre = ref('')
const sortBy = ref<SortOption>('relevance')

const subjects = getSubjects()
const genres = getGenres()

const books = computed<Book[]>(() =>
  searchBooks({
    title: title.value,
    author: author.value,
    year: year.value ? Number(year.value) : undefined,
    subject: subject.value,
    genre: genre.value,
    sortBy: sortBy.value,
  }),
)

const totalBooks = computed(() => books.value.length)
const totalBooksText = computed(() =>
  `${totalBooks.value} ${totalBooks.value === 1 ? 'libro encontrado' : 'libros encontrados'}`
)

const resetFilters = () => {
  title.value = ''
  author.value = ''
  year.value = ''
  subject.value = ''
  genre.value = ''
  sortBy.value = 'relevance'
}
</script>

<template>
  <main>
    <h1>Books</h1>

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
        <option v-for="item in subjects" :key="item" :value="item">
          {{ item }}
        </option>
      </select>

      <label for="genre">Género</label>
      <select id="genre" v-model="genre">
        <option value="">Todos</option>
        <option v-for="item in genres" :key="item" :value="item">
          {{ item }}
        </option>
      </select>

      <label for="sortBy">Ordenar por</label>
      <select id="sortBy" v-model="sortBy">
        <option value="relevance">Relevancia</option>
        <option value="title">Título</option>
        <option value="author">Autor</option>
        <option value="year">Año</option>
      </select>

      <button type="button" @click="resetFilters">Limpiar filtros</button>
    </form>

    <section>
      <h2>Resultados</h2>

      <p v-if="totalBooks === 0">No se han encontrado libros.</p>

      <template v-else>
        <p>{{ totalBooksText }}</p>

        <article v-for="book in books" :key="book.id">
          <img :src="book.coverUrl" :alt="book.title" />
          <h3>{{ book.title }}</h3>
          <p>{{ book.authors.join(', ') }}</p>
          <p>{{ book.publishedYear }}</p>
          <p>{{ book.genre }}</p>
        </article>
      </template>
    </section>
  </main>
</template>