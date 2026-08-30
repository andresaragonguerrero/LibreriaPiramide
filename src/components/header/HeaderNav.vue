<template>
    <nav class="header__nav" aria-label="Internal navigation">
        <RouterLink class="header__link" to="/">Inicio</RouterLink>
        <RouterLink class="header__link" to="/search">Buscar Libros</RouterLink>
        <a class="header__link" href="#">Autores</a>
        <a class="header__link" href="#">Géneros</a>
        <a class="header__link" href="#">Temáticas</a>
        <a class="header__link" href="#">Recomendados</a>
        <a class="header__link" href="#">Novedades</a>
        <a class="header__link" href="#">Blog</a>
        <RouterLink class="header__link" to="/about">Nosotros</RouterLink>
        <a class="header__link" href="#">Contacto</a>
    </nav>
</template>

<style lang="css" scoped>
.header__nav {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    background-color: var(--color-primary);
}

.header__link {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    border: 1px solid var(--color-primary);
    color: var(--color-bg);
    background-color: var(--color-primary);
    transition:
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
    cursor: pointer;
}

.header__link:hover {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: var(--color-bg);
}
</style>