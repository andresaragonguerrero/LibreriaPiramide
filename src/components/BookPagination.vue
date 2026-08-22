<script setup lang="ts">
defineProps<{
    currentPage: number
    totalPages: number
}>()

defineEmits<{
    prev: []
    next: []
}>()
</script>

<template>
    <div>
        <button type="button" :disabled="currentPage === 1" @click="$emit('prev')">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button type="button" :disabled="currentPage === totalPages" @click="$emit('next')">Siguiente</button>
    </div>
</template>