<script setup>

defineProps({
    title: String,
    text: String
})
</script>

<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 156px;
        background-color: white;
        color: black;
        height: 563px;
        width: 391px;
        border-radius: 30px;
        padding: 20px;
        font-family: "Inter", sans-serif;
    }

    h3 {
        font-weight: 200;
        font-size: 48px;
    }

    p {
        font-weight: 200;
        font-size: 32px;
        text-align: justify;
    }
</style>