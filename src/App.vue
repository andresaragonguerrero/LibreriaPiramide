<script setup lang="ts">
import { ref } from 'vue'
import { searchBooks } from '@/services/books/books.service'
import type { Book } from '@/types/book'

const books = ref<Book[]>([])

const title = ref('')
const author = ref('')
const year = ref('')
const subject = ref('')
const genre = ref('')

const search = () => {
  books.value = searchBooks({
    title: title.value,
    author: author.value,
    year: year.value ? Number(year.value) : undefined,
    subject: subject.value,
    genre: genre.value,
  })
}
</script>

<template>
  <main>
    <h1>Books</h1>

    <form @submit.prevent="search">
      <label for="title">Título</label>
      <input id="title" v-model="title" type="search" placeholder="Buscar por título" />

      <label for="author">Autor</label>
      <input id="author" v-model="author" type="search" placeholder="Buscar por autor" />

      <label for="year">Año</label>
      <input id="year" v-model="year" type="search" placeholder="Buscar por año" />

      <label for="subject">Tema</label>
      <select id="subject" v-model="subject">
        <option value="">Todos</option>
      </select>

      <label for="genre">Género</label>
      <select id="genre" v-model="genre">
        <option value="">Todos</option>
      </select>

      <button type="submit">Buscar</button>
    </form>

    <section>
      <h2>Resultados</h2>

      <article v-for="book in books" :key="book.id">
        <img :src="book.coverUrl" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p>{{ book.authors.join(', ') }}</p>
        <p>{{ book.publishedYear }}</p>
        <p>{{ book.genre }}</p>
      </article>
    </section>
  </main>
</template>