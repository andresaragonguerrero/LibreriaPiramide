<template>
    <article class="header__main">
        <div class="header__logo-container">
            <h1 class="header__title">Librería Pirámide</h1>
        </div>

        <div class="header__search-container">
            <RouterLink class="header__search-link" to="/search">Buscar Libros</RouterLink>
            <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"
                    clip-rule="evenodd" />
            </svg>
        </div>

        <div class="header__user-actions">
            <div class="header__cart">
                <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px"
                    height="25px">
                    <path fill="currentColor"
                        d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382s.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248s.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508S18.506 6 16.45 6H5.745a9 9 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" />
                </svg>
                <p class="header__cart-text">Mi compra</p>
            </div>
            <div class="header__auth">
                <a class="header__auth-link" href="#">Entrar</a>
                <span class="header__auth-separator">|</span>
                <a class="header__auth-link" href="#">Registrarse</a>
            </div>
        </div>
    </article>
</template>

<style lang="css" scoped>

</style>
