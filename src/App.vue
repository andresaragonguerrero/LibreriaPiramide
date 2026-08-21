<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { searchBooks } from '@/services/books/books.service'
import type { Book } from '@/types/book'

const books = ref<Book[]>([])

onMounted(() => {
  books.value = searchBooks()
})
</script>

<template>
  <main>
    <h1>Books</h1>

    <form>
      <label for="title">Título</label>
      <input id="title" type="search" placeholder="Buscar por título" />

      <label for="author">Autor</label>
      <input id="author" type="search" placeholder="Buscar por autor" />

      <label for="year">Año</label>
      <input id="year" type="search" placeholder="Buscar por año" />

      <label for="subject">Tema</label>
      <select id="subject">
        <option value="">Todos</option>
      </select>
    </form>

    <section>
      <h2>Resultados</h2>

      <article v-for="book in books" :key="book.id">
        <img :src="book.coverUrl" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p>{{ book.authors.join(', ') }}</p>
        <p>{{ book.publishedYear }}</p>
      </article>
    </section>
  </main>
</template>