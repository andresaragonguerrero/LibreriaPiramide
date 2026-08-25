<template>
    <nav class="header__nav" aria-label="Internal navigation">
        <RouterLink class="header__link" to="/">Inicio</RouterLink>
        <RouterLink class="header__link" to="/search">Buscar Libros</RouterLink>
        <a class="header__link" href="#">Autores</a>
        <a class="header__link" href="#">Géneros</a>
        <a class="header__link" href="#">Temáticas</a>
        <a class="header__link" href="#">Recomendados</a>
        <a class="header__link" href="#">Nosotros</a>
        <a class="header__link" href="#">Contacto</a>
    </nav>
</template>

<style lang="css" scoped>
.header__nav {
    grid-column: 3 / 11;
    display: grid;
    grid-template-columns: subgrid;
}

.header__link {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
}
</style>