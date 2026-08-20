<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <img src="/Logo.png" /> 
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/dados">Dados</RouterLink>
            <RouterLink to="/mapa">Mapa</RouterLink>
            <RouterLink to="/sobre">Sobre</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    header {
        background-color: #000000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
    }

    nav {
        color: #ffffff;
        display: flex;
        gap: 38px;
        font-size: 38px;
        font-weight: normal;
    }
</style>