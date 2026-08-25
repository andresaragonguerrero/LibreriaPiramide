<script setup lang="ts">
import HeaderTop from './components/header/HeaderTop.vue';
import HeaderMain from './components/header/HeaderMain.vue';
import HeaderNav from './components/header/HeaderNav.vue';

</script>

<template>
  <header class="header">
    <HeaderTop />
    <HeaderMain />
    <HeaderNav />
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer class="footer"></footer>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: 5dvh 8dvh 5dvh;
}
</style>