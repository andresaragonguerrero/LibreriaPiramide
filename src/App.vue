<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/search">Buscar Libros</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>