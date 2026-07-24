<template>
    <header>
        <img src="/Logo.png" /> 
        <nav>
            <p>Home</p>
            <p>Dados</p>
            <p>Mapa</p>
            <p>Contato</p>
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