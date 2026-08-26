<script setup lang="ts">
import HeaderTop from './components/header/HeaderTop.vue';
import HeaderMain from './components/header/HeaderMain.vue';
import HeaderNav from './components/header/HeaderNav.vue';

</script>

<template>
  <div class="app">
    <header class="header">
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </header>

    <main class="main">
      <RouterView />
    </main>

    <footer class="footer"></footer>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
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
  background-color: var(--color-bg);
}
</style>