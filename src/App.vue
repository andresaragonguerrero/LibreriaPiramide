<script setup lang="ts">
import HeaderTop from './components/header/HeaderTop.vue';
import HeaderMain from './components/header/HeaderMain.vue';
import HeaderNav from './components/header/HeaderNav.vue';
import FooterBottom from './components/footer/FooterBottom.vue';
import FooterMain from './components/footer/FooterMain.vue';

import { useHeaderScroll } from './composables/useHeaderScroll';

const { isCollapsed } = useHeaderScroll();

</script>

<template>
  <div class="app">
    <header class="header" :class="{ 'header--collapsed': isCollapsed }">
      <HeaderTop />
      <HeaderMain :collapsed="isCollapsed" />
      <HeaderNav />
    </header>

    <main class="main">
      <RouterView />
    </main>

    <footer class="footer">
      <FooterMain />
      <FooterBottom />
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--space-2);
  background-color: var(--color-bg);
}

.header,
.main,
.footer {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
}

.header {
  grid-template-rows: 5dvh 8dvh 5dvh;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.header--collapsed {
  grid-template-rows: 0dvh 8dvh 0dvh;
}

.header :deep(.header__top),
.header :deep(.header__nav) {
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.25, 0, 0.75, 1),
    opacity 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.header--collapsed :deep(.header__top),
.header--collapsed :deep(.header__nav) {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 1250px) {
  .header {
    grid-template-rows: 0dvh 8dvh 0dvh;
  }
}

@media (max-width: 768px) {
  .header {
    grid-template-rows: 0dvh minmax(8dvh, auto) 0dvh;
  }
}
</style>