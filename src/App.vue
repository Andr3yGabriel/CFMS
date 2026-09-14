<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lalezar&display=swap');

  /*
   * Tamanhos fluidos: o valor máximo de cada clamp() é o tamanho original
   * do layout (feito para 1920px); abaixo disso eles encolhem com a tela.
   */
  :root {
    --fs-display: clamp(2rem, 1rem + 2.8vw, 4rem);        /* 64px */
    --fs-title: clamp(1.75rem, 0.75rem + 2vw, 3rem);      /* 48px */
    --fs-lead: clamp(1.25rem, 0.5rem + 1.75vw, 2.5rem);   /* 40px */
    --fs-nav: clamp(1.25rem, 0.5rem + 1.6vw, 2.375rem);   /* 38px */
    --fs-button: clamp(1.25rem, 0.5rem + 1.5vw, 2.25rem); /* 36px */
    --fs-body: clamp(1.125rem, 0.5rem + 1.25vw, 2rem);    /* 32px */
    --fs-small: clamp(1rem, 0.5rem + 1vw, 1.75rem);       /* 28px */

    --radius: clamp(1rem, 1.6vw, 1.875rem);               /* 30px */
    --radius-sm: clamp(0.75rem, 1vw, 1.25rem);            /* 20px */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Lalezar', cursive;
  }

  img {
    max-width: 100%;
  }
</style>
