<script setup>
    import Header from '@/components/Header.vue';
</script>

<template>
    <Header/>
    <main>
        <div id="main-text">
            <img src="/logo IFB.png">
            <p>titulo do projeto</p>
        </div>
    </main>
</template>

<style scoped>
    main {
        background-image: url('/public/background-main-sobre.png');
        width: 1905px;
        height: 880px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #main-text {
        display: flex;
        width: 1533px;
        height: 781px;
        background-color: rgba(0, 0, 0, 0.7);
        flex-direction: row;
        gap: 205px;
        border-radius: 30px;
        padding: 20px;
    }

    #main-text img {
        height: 177px;
        width: 175px;
        border-radius: 20px;
    }

    #main-text p {
        font-weight: 300;
        font-size: 32px;
        color: white;
    }
</style>