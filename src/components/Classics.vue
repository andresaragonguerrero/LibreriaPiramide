<script lang="ts"></script>

<template>
    <section class="classics">
        <article class="classics-display">
            <img class="classics-display__bg" src="@/assets/images/classic-literature/library__rafael-cosquiere.jpg"
                alt="Biblioteca">

            <div class="classics-display__book-list">
                <img class="classics-display__book" src="/public/images/covers/cumbres-borrascosas.jpg" alt="Libro 1">
                <img class="classics-display__book" src="/public/images/covers/dracula.jpg" alt="Libro 2">
                <img class="classics-display__book" src="/public/images/covers/frankenstein.jpg" alt="Libro 3">
                <img class="classics-display__book" src="/public/images/covers/la-conjura-de-los-necios.jpg"
                    alt="Libro 4">
                <img class="classics-display__book" src="/public/images/covers/la-princesa-de-cleves.jpg" alt="Libro 5">
            </div>
        </article>

        <article class="classics-body">
            <div class="classics-body__info">
                <h2 class="classics-body__info-title">Obras clásicas que recomendamos</h2>
                <p class="classics-body__info-description">Aprovecha para leer estas obras clásicas</p>
                <p class="classics-body__info-description">Es gratis si accedes a Google Books</p>
            </div>
            <button type="button" class="classics-body__button">Acceder</button>
        </article>
    </section>
</template>

<style scoped>
.classics {
    grid-column: 1 / 12;
    overflow: hidden;
    display: grid;
    grid-template-columns: subgrid;
    background-color: var(--color-bg);
}

.classics-display {
    grid-column: 2 / 12;
    height: 70dvh;
    overflow: hidden;
    position: relative;
    display: grid;
    place-items: center;
}

.classics-display__bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    filter: blur(3px);
}

.classics-display__book-list {
    padding: 0 var(--space-5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-4);
}

.classics-display__book {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    z-index: 1;
}

.classics-body {
    grid-column: 2 / 12;
    padding: var(--space-4) var(--space-6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
}

.classics-body__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--space-3);
}

.classics-body__info-title {
    font-family: var(--ff-primary);
    font-size: var(--fs-4);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-bg);
}

.classics-body__info-description {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-bg);
}

.classics-body__button {
    padding: var(--space-2) var(--space-3);
    font-family: var(--ff-secondary);
    font-size: var(--fs-3);
    font-weight: normal;
    color: var(--color-text);
    border: none;
    outline: none;
    background-color: var(--color-secondary);
    transition:
        outline 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        color 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        background-color 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.classics-body__button:hover {
    outline: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    background-color: var(--color-primary);
}
</style>