<script setup lang="ts">

</script>

<template>
    <section class="hero">
        <div class="hero__column-left">
            <article class="hero__article hero__article--main">
                <img class="hero__article-image hero__article-image--main"
                    src="@/assets/images/hero/prix-goncourt_blog-image.jpg" alt="Premios Goncourt">
                <div class="hero__article-description hero__article-description--main">
                    <h3 class="hero__article-title">Houris: roman de Kamel Daoud</h3>
                    <p class="hero__article-text hero__article-text--main">
                        Novela ganadora del prestigioso Premio Goncourt. "Da voz al sufrimiento asociado a un periodo
                        oscuro en Argelia, el de las mujeres en particular".
                    </p>
                </div>
            </article>
        </div>
        <div class="hero__column-right">
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/books-blog_florencia-viadana.jpg" alt="">
                <div class="hero__article-description hero__article-description--secondary">
                    <h3 class="hero__article-title">Taller de escritura el próximo mes de junio: Vargas</h3>
                    <p class="hero__article-text">
                        La escritora Fred Vargas estará dando clases de escritura durante junio.
                    </p>
                </div>
            </article>
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/books-blog_gulfer-ergin.jpg" alt="">
                <div class="hero__article-description hero__article-description--secondary">
                    <h3 class="hero__article-title">La lectura como herramienta contra el estrés</h3>
                    <p class="hero__article-text">
                        La lectura puede brindar una sensación de conexión y comprensión.
                    </p>
                </div>
            </article>
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/typewritter-blog_artem-krapivin.jpg" alt="">
                <div class="hero__article-description hero__article-description--secondary">
                    <h3 class="hero__article-title">Nueva sesión del círculo de lectura: Lerroux</h3>
                    <p class="hero__article-text">
                        El próximo sábado comentaremos la obra: "El misterio del cuarto amarillo".
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.hero {
    overflow: hidden;
    grid-column: 1 / -1;
    padding-bottom: var(--space-3);
    height: calc(100dvh - var(--header-height));
    display: grid;
    grid-template-columns: subgrid;
    background-color: var(--color-bg);
}

.hero__column-left {
    grid-column: 2 / 8;
}

.hero__column-right {
    overflow: hidden;
    grid-column: 8 / 12;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: var(--space-2);
}

.hero__article {
    overflow: hidden;
    height: 100%;
    position: relative;
}

.hero__article-image {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--border-radius-md);
}

.hero__article-description {
    position: absolute;
    bottom: var(--space-2);
    left: var(--space-2);
    z-index: 1;
    padding: var(--space-2);
    display: grid;
    gap: var(--space-2);
    background-color: var(--color-bg);
    border-radius: var(--border-radius-md);
}

.hero__article-description--main {
    max-width: 90ch;
}

.hero__article-description--secondary {
    max-width: 50ch;
}

.hero__column-left .hero__article-title {
    font-size: var(--fs-3);
}

.hero__column-right .hero__article-title {
   font-size: var(--fs-4); 
}

.hero__article-title {
    font-family: var(--font-secondary);
    font-weight: normal;
    color: var(--color-text);
    text-transform: uppercase;
}

.hero__article-text {
    font-family: var(--font-secondary);
    font-size: var(--fs-4);
    font-weight: lighter;
    color: var(--color-text);
}
</style>