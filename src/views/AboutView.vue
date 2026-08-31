<script lang="ts"></script>

<template>
    <section class="about">
        <img class="about-bg" src="@/assets/images/about/about-bg.jpg" alt="Librería pirámide">

        <div class="about-left">
            <article class="about-article">
                <div class="about-header">
                    <h2 class="about-header__title">Nuestra historia</h2>
                </div>
                <div class="about-body">
                    <p class="about-body__text">
                        Nacimos en 2020 con una idea muy sencilla: hacer que leer estuviera al alcance de todos. Desde
                        el principio, apostamos por construir una librería independiente, cercana y con personalidad
                        propia, donde cada persona pudiera encontrar una historia que le acompañara sin que el precio
                        fuera una barrera.
                    </p>
                    <p class="about-body__text">
                        Lo que comenzó como un proyecto basado en nuestra pasión por los libros ha ido creciendo gracias
                        a quienes nos visitan, nos recomiendan y comparten con nosotros el placer de leer.
                    </p>
                    <p class="about-body__text">
                        Hoy seguimos manteniendo intacta esa esencia: una librería hecha con ilusión, criterio y mucho
                        amor por los libros.
                    </p>
                </div>
            </article>

            <article class="about-article">
                <div class="about-header">
                    <h2 class="about-header__title">Nuestra misión</h2>
                </div>
                <div class="about-body">
                    <p class="about-body__text">
                        Nuestra misión es acercar la lectura a todas las personas y hacerla más fácil, accesible y
                        asequible. Creemos que un buen libro puede entretener, enseñar, emocionar, acompañar y, en
                        ocasiones, cambiar nuestra manera de ver el mundo.
                    </p>
                    <p class="about-body__text">
                        Por eso trabajamos para ofrecer una selección amplia y cuidada, buscando siempre alternativas
                        que permitan disfrutar de la lectura independientemente del presupuesto.
                    </p>
                    <p class="about-body__text">
                        Queremos ser ese lugar al que acudir cuando buscas una recomendación, una nueva historia o
                        simplemente un espacio en el que descubrir algo diferente.
                    </p>
                </div>
            </article>

            <article class="about-article">
                <div class="about-header">
                    <h2 class="about-header__title">Nuestros valores</h2>
                </div>
                <div class="about-body">
                    <p class="about-body__text">
                        Miramos hacia el futuro con la intención de seguir construyendo una comunidad alrededor de los
                        libros y de demostrar que una librería independiente puede ser cercana, accesible y relevante.
                    </p>
                    <p class="about-body__text">
                        Nos mueven valores como la cercanía, la honestidad, la inclusión, la pasión por la cultura y el
                        compromiso con nuestros lectores. Creemos en el poder de las historias para conectar a las
                        personas y en la importancia de que nadie deje de leer por motivos económicos.
                    </p>
                    <p class="about-body__text">
                        Queremos crecer sin perder nuestra esencia y seguir siendo una librería donde cada lector,
                        independientemente de su edad, gustos o presupuesto, pueda sentirse bienvenido.
                    </p>
                </div>
            </article>
        </div>

        <div class="about-right">
            <article class="about-article">
                <iframe class="about-map" title="Localización"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.713982119553!2d-0.8985201235503212!3d41.64031338026824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914d9d44e537b%3A0xc46c08e1bc54191e!2sP.%C2%BA%20de%20Fernando%20el%20Cat%C3%B3lico%2C%2040%2C%2050009%20Zaragoza!5e0!3m2!1ses!2ses!4v1788156996802!5m2!1ses!2ses" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" allowfullscreen="true">
                </iframe>
            </article>

            <article class="about-article">
                <div class="about-header">
                    <h2 class="about-header__title">Horarios</h2>
                </div>
                <div class="about-body">
                    <p class="about-body__text">De lunes a viernes</p>
                    <p class="about-body__text">9:00 - 11:30 | 12:00 -14:30</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.about {
    grid-column: 1 / -1;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    gap: var(--space-4);
}

.about-bg {
    grid-column: 2 / 12;
    grid-row: 1 / 2;
    height: 50dvh;
    width: 100%;
}

.about-left {
    grid-column: 2 / 8;
    grid-row: 2 / 3;
    padding: var(--space-2) var(--space-4) var(--space-1) 0;
    display: grid;
    gap: var(--space-5);
}

.about-right {
    grid-column: 8 / 12;
    grid-row: 2 / 3;
    align-self: start;
    position: sticky;
    top: var(--space-2);
    padding: var(--space-2) 0 var(--space-1) var(--space-4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-5);
}

.about-header__title {
    font-family: var(--ff-primary);
    font-size: var(--fs-3);
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-primary);
}

.about-article {
    display: grid;
    gap: var(--space-3);
}

.about-header {
    border-bottom: 1px solid var(--color-primary);
}

.about-body {
    padding-right: var(--space-4);
    display: grid;
    gap: var(--space-2);
}

.about-body__text {
    font-family: var(--ff-secondary);
    font-size: var(--fs-4);
    font-weight: normal;
    color: var(--color-text);
}

.about-map {
    width: 100%;
    aspect-ratio: 4 / 3;
    border: none;
    border-radius: var(--border-radius-md);
}
</style>