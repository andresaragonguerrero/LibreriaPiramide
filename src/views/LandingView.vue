<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Hero from '@/components/Hero.vue';
import ContentSection from '@/components/ContentSection.vue';
import type { ContentSection as ContentSectionType } from '@/types/content-section';
import { contentSectionService } from '@/services/content-section.service'

const sections = ref<ContentSectionType[]>([]);

onMounted(async () => {
    sections.value = await contentSectionService.getSections()
});
</script>

<template>
    <div class="landing-view">
        <Hero />
        <ContentSection v-for="section in sections" :key="section.id" :section="section" />
    </div>
</template>

<style scoped>
.landing-view {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
    background-color: var(--color-bg);
}
</style>