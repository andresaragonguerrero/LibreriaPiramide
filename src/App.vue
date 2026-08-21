<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { searchBooks } from '@/services/books/books.service'

const books = ref<unknown[]>([])

onMounted(async () => {
  const response = await searchBooks('harry potter', 1)
  books.value = response.docs
})
</script>

<template>
  <main>
    <h1>Books API test</h1>
    <pre>{{ books }}</pre>
  </main>
</template>