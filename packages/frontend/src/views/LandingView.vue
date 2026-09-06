<script setup lang="ts">
import { onMounted } from 'vue';
import Hero from '@/components/sections/Hero.vue';
import ContentSection from '@/components/sections/ContentSection.vue';
import Classics from '@/components/sections/Classics.vue';
import Contact from '@/components/sections/Contact.vue';

import { contentSectionService } from '@/services/content-section.service'
import { useAsyncState } from '@/composables/useAsyncState'

const { data: sections, isLoading, error, execute } = useAsyncState(() => contentSectionService.getSections())

onMounted(() => execute());
</script>

<template>
    <div class="landing-view">
        <Hero />

        <div v-if="isLoading" class="state-message">
            <span class="spinner" aria-hidden="true"></span>
            <p>Cargando secciones...</p>
        </div>

        <div v-else-if="error" class="state-message state-message--error">
            <span class="state-icon" aria-hidden="true">!</span>
            <p>{{ error }}</p>
        </div>

        <ContentSection v-else v-for="section in sections" :key="section.id" :section="section" />
        <Classics />
        <Contact />
    </div>
</template>

<style scoped>
.landing-view {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
    gap: var(--space-2);
    background-color: var(--color-bg);
}

.state-message {
    grid-column: 1 / -1;
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
</style>