<script setup lang="ts">

</script>

<template>
    <section class="hero">
        <div class="hero__column-left">
            <article class="hero__article hero__article--main">
                <img class="hero__article-image hero__article-image--main" src="@/assets/images/hero/prix-goncourt_blog-image.jpg"
                    alt="Premios Goncourt">
                <div class="hero__article-description">
                    <h3 class="hero__article-title hero__article-title--main">Título del artículo</h3>
                    <p class="hero__article-text hero__article-text--main">
                        Texto descriptivo de los artículos principales del hero
                    </p>
                </div>
            </article>
        </div>
        <div class="hero__column-right">
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/books-blog_florencia-viadana.jpg" alt="">
                <div class="hero__article-description">
                    <h3 class="hero__article-title">Título del artículo</h3>
                    <p class="hero__article-text">Texto descriptivo de los artículos secundarios del hero</p>
                </div>
            </article>
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/books-blog_gulfer-ergin.jpg" alt="">
                <div class="hero__article-description">
                    <h3 class="hero__article-title">Título del artículo</h3>
                    <p class="hero__article-text">Texto descriptivo de los artículos secundarios del hero</p>
                </div>
            </article>
            <article class="hero__article">
                <img class="hero__article-image" src="@/assets/images/hero/typewritter-blog_artem-krapivin.jpg" alt="">
                <div class="hero__article-description">
                    <h3 class="hero__article-title">Título del artículo</h3>
                    <p class="hero__article-text">Texto descriptivo de los artículos secundarios del hero</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.hero {
    overflow: hidden;
    grid-column: 1 / -1;
    height: calc(100dvh - var(--header-height));
    padding: var(--space-2) 0;
    display: grid;
    grid-template-columns: subgrid;
}

.hero__column-left {
    grid-column: 2 / 8;
    padding-right: var(--space-1);
}

.hero__column-right {
    overflow: hidden;
    grid-column: 8 / 12;
    padding-left: var(--space-1);
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
</style>