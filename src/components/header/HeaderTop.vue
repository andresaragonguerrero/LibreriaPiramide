<template>
    <article class="header__top">
        <p class="header__shipping-text">Gastos de envío gratis a partir de compras de 19€</p>
        <p class="header__phone">
            <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px">
                <path fill="currentColor"
                    d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" />
            </svg>
            <span>976 000 000</span>
        </p>
    </article>
</template>

<style lang="css" scoped>
.header__top {
    grid-column: 2 / 12;
    padding: 0 var(--space-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-secondary);
}

.header__shipping-text,
.header__phone {
    font-family: var(--font-secondary);
    font-size: var(--fs-5);
    font-weight: lighter;
    color: var(--color-text);
}

.header__shipping-text {
    grid-column: 2 / 7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.header__phone {
    grid-column: 8 / 12;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-2);
}

.header__icon {
    fill: var(--color-text);
    width: 25px;
    height: 25px;
}
</style>