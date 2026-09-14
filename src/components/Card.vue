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
        gap: clamp(1.5rem, 6vw, 9.75rem);
        background-color: white;
        color: black;
        min-height: clamp(16rem, 29vw, 35.2rem);
        border-radius: var(--radius);
        padding: clamp(1rem, 1.5vw, 1.25rem);
        font-family: "Inter", sans-serif;
    }

    h3 {
        font-weight: 200;
        font-size: var(--fs-title);
        margin: 0.5em 0 0;
    }

    p {
        font-weight: 200;
        font-size: var(--fs-body);
        text-align: justify;
        hyphens: auto;
        margin: 0;
    }
</style>
