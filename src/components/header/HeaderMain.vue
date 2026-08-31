<script setup lang="ts">
defineProps<{ collapsed: boolean }>();
</script>

<template>
    <article class="header__main">
        <div class="header__logo-container">
            <h1 class="header__title">Librería Pirámide</h1>
        </div>

        <div class="header__user-actions">
            <div class="header__cart">
                <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px"
                    height="25px">
                    <path fill="currentColor"
                        d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382s.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248s.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508S18.506 6 16.45 6H5.745a9 9 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" />
                </svg>
                <p class="header__cart-text">
                    <span class="header__cart-title">Mi compra</span>
                    <span class="header__cart-quantity">0,00€</span>
                </p>
            </div>
            <div class="header__auth">
                <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px"
                    height="25px">
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="9" r="3" />
                        <circle cx="12" cy="12" r="10" />
                        <path stroke-linecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5" />
                    </g>
                </svg>
                <p class="header__auth-text">
                    <span class="header__auth-title">Mi cuenta</span>
                    <span class="header__auth-login">Iniciar sesión</span>
                </p>
            </div>
            <button class="header__menu-toggle" :class="{ 'header__menu-toggle--visible': collapsed }" type="button"
                aria-label="Abrir menú">
                <span class="header__menu-bar"></span>
                <span class="header__menu-bar"></span>
                <span class="header__menu-bar"></span>
            </button>
        </div>
    </article>
</template>

<style lang="css" scoped>
.header__main {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
}

.header__logo-container {
    grid-column: 2 / 6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.header__user-actions {
    grid-column: 8 / 12;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-3);
}

.header__cart,
.header__auth {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-1);
    cursor: pointer;
}

.header__title {
    font-family: var(--ff-primary);
    font-size: var(--fs-1);
    font-weight: bold;
    color: var(--color-text);
}

.header__cart-text,
.header__auth-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: var(--ff-secondary);
    color: var(--color-text);
}

.header__cart-title,
.header__auth-title {
    font-size: var(--fs-5);
    font-weight: normal;
    text-align: left;
    text-transform: uppercase;
}

.header__cart-quantity,
.header__auth-login {
    font-size: var(--fs-5);
    font-weight: bold;
    text-align: left;
}

.header__icon {
    fill: var(--color-text);
    width: 35px;
    height: 35px;
}

.header__menu-toggle {
    height: var(--space-4);
    width: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition:
        width 0.4s cubic-bezier(0.25, 0, 0.75, 1),
        opacity 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.header__menu-toggle--visible {
    width: var(--space-4);
    opacity: 1;
    pointer-events: auto;
}

.header__menu-bar {
    width: var(--space-4);
    height: 2px;
    flex-shrink: 0;
    background-color: var(--color-text);
    transition: transform 0.4s cubic-bezier(0.25, 0, 0.75, 1);
}

.header__menu-toggle:hover .header__menu-bar:nth-child(1) {
    transform: translateX(calc(-1 * var(--space-1)));
}

.header__menu-toggle:hover .header__menu-bar:nth-child(2) {
    transform: translateX(var(--space-1));
}

.header__menu-toggle:hover .header__menu-bar:nth-child(3) {
    transform: translateX(calc(-1 * var(--space-1)));
}
</style>