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
    <section class="book-pagination">
        <button type="button" class="book-pagination__button" :disabled="currentPage === 1"
            @click="$emit('prev')">Anterior</button>
        <span class="book-pagination__page">Página {{ currentPage }} de {{ totalPages }}</span>
        <button type="button" class="book-pagination__button" :disabled="currentPage === totalPages"
            @click="$emit('next')">Siguiente</button>
    </section>
</template>

<style scoped>
.book-pagination {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--space-4);
}

.book-pagination__button {
    padding: var(--space-1) var(--space-3);
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: bold;
    border: none;
    outline: 1px solid transparent;
    color: var(--color-primary);
    background-color: var(--color-secondary);
    transition:
        outline 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
    cursor: pointer;
}

.book-pagination__button:hover {
    outline: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: var(--color-bg);
}

.book-pagination__page {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-text);
}
</style>