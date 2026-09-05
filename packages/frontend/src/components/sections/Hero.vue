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

@media only screen and (min-width: 768px) and (max-width: 1250px) {
    .hero {
        padding: 0 var(--space-2);
    }

    .hero__column-left {
        grid-column: 1 / 8;
    }

    .hero__column-right {
        grid-column: 8 / -1;
    }

    .hero__article-title {
        font-size: var(--fs-4);
    }

    .hero__article-text {
        font-size: var(--fs-5);
    }
}

@media (max-width: 768px) {
    .hero {
        height: auto;
        padding: 0 var(--space-2);
        gap: var(--space-2);
    }

    .hero__column-left,
    .hero__column-right {
        grid-column: 1 / -1;
    }

    .hero__column-left {
        border-bottom: 1px solid var(--color-primary);
    }

    .hero__column-right {
        overflow: visible;
        height: auto;
        grid-template-rows: none;
        gap: var(--space-2);
    }

    .hero__article {
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .hero__article-image {
        height: auto;
        aspect-ratio: 16 / 10;
    }

    .hero__article-title {
        width: 100%;
        padding: var(--space-2);
        color: var(--color-bg);
        background-color: var(--color-primary);
    }

    .hero__article-description {
        position: static;
        max-width: none;
        border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
    }

    .hero__column-right .hero__article {
        height: auto;
        display: flex;
        flex-direction: row;
    }

    .hero__column-right .hero__article-image {
        height: auto;
        width: 35%;
        aspect-ratio: 3 / 4;
        flex-shrink: 0;
    }

    .hero__column-right .hero__article-description {
        position: static;
        max-width: none;
    }
}

@media (max-width: 650px) {
    .hero__column-right {
        flex-direction: column;
    }

    .hero__column-right .hero__article {
        width: 100%;
    }
}

@media (min-width: 650px) and (max-width: 768px) {
    .hero__column-right {
        flex-direction: row;
    }

    .hero__column-right .hero__article {
        flex: 1;
        min-width: 0;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1250px) {
    .hero__article-description--main {
        max-width: 70%;
    }

    .hero__article-description--secondary {
        max-width: 60%;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .hero__article-description--main {
        max-width: 80%;
    }

    .hero__article-description--secondary {
        max-width: 75%;
    }
}
</style>