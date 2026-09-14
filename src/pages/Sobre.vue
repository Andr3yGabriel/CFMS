<script setup>
    import Header from '@/components/Header.vue';
</script>

<template>
    <div class="page">
        <Header/>
        <main>
            <div id="main-text">
                <img src="/logo IFB.png">
                <p>titulo do projeto</p>
            </div>
        </main>
    </div>
</template>

<style scoped>
    /* O header tem altura variável; o main ocupa o restante da tela */
    .page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        background-image: url('/background-main-sobre.png');
        background-size: cover;
        background-position: center;
        padding: clamp(1rem, 2.5vw, 3rem) clamp(1rem, 9.7vw, 11.625rem);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #main-text {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 95.8rem;
        min-height: clamp(20rem, 72vh, 48.8rem);
        background-color: rgba(0, 0, 0, 0.7);
        flex-direction: row;
        gap: clamp(1.5rem, 10.7vw, 12.8rem);
        border-radius: var(--radius);
        padding: clamp(1rem, 1.5vw, 1.25rem);
    }

    #main-text img {
        width: clamp(5rem, 9.1vw, 10.9375rem);
        height: auto;
        align-self: flex-start;
        border-radius: var(--radius-sm);
    }

    #main-text p {
        font-weight: 300;
        font-size: var(--fs-body);
        color: white;
    }
</style>
