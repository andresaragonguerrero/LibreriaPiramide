<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { searchBooks } from '@/services/books/books.service'

const books = ref<unknown[]>([])

onMounted(() => {
  books.value = searchBooks()
})
</script>

<template>
  <main>
    <h1>Books API test</h1>
    <pre>{{ books }}</pre>
  </main>
</template>