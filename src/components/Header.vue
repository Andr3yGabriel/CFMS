<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="logo-titulo">
            <img src="/Logo.png" />
            <p>CFMS - IFB</p>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/dados">Dados e Indicadores</RouterLink>
            <RouterLink to="/mapa">Monitoramento</RouterLink>
            <RouterLink to="/sobre">Contato</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    .logo-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-size: var(--fs-nav);
    }

    header {
        background-color: #000000;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem 1rem;
        padding: 10px clamp(1rem, 1.3vw, 1.5625rem);
    }

    header img {
        height: clamp(3rem, 5.3vw, 6.3rem);
        width: auto;
    }

    nav {
        color: #ffffff;
        display: flex;
        flex-wrap: wrap;
        gap: clamp(1rem, 2vw, 2.375rem);
        font-size: var(--fs-nav);
        font-weight: normal;
    }

    nav a {
        color: inherit;
        text-decoration: underline transparent;
        text-decoration-thickness: 0.1em;
        text-underline-offset: 0.2em;
        transition: color 0.2s, text-decoration-color 0.2s;
    }

    nav a:hover {
        color: #FDBA74;
    }

    /* Classe aplicada pelo RouterLink no item da rota atual */
    nav a.router-link-exact-active {
        color: #F97316;
        text-decoration-color: currentColor;
    }
</style>
