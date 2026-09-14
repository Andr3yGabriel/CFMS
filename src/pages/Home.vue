<script setup>
    import Header from '../components/Header.vue'
    import Card from '../components/Card.vue'
</script>

<template>
    <div class="home"> 
        <Header />

        <div class="text">
            <h1>Cerrado Fire Monitoring System</h1>
            <div class="text-content">
                <p>Combinando sensoriamento via satélite e Inteligência Artificial, o CFMS mapeia focos de calor e projeta áreas de risco em tempo real. Nosso objetivo é garantir máxima agilidade na resposta a emergências, fornecendo dados precisos para que brigadistas e órgãos ambientais ajam rápido na proteção do Cerrado.</p>
            </div>
            <div class="buttons">
                <button id="data-button">Dados</button>
                <button id="map-button">Mapa</button>
            </div>
        </div>

        <div class="map-info">
            <h1>O que é possível identificar no mapa</h1>

            <div class="cards">
                <Card title="Título" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."/>
                <Card title="Título" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."/>
                <Card title="Título" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."/>
                <Card title="Título" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."/>
            </div>
        </div>

        <div class="about">
            <h2>Sobre o projeto</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
        </div>

        <div class="contact-form">
            <div class="form">
                <h3>formulario para contato</h3>

                <div class="inputs">
                    <input type="text" placeholder="Nome">
                    <input type="text" placeholder="E-mail">
                    <input type="text" placeholder="Mensagem" id="message-input">
                </div>

                <button>Enviar</button>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        font-size: var(--fs-display);
        font-weight: normal;
    }

    p {
        hyphens: auto;
    }

    .home {
        color: white;
    }

    .text {
        display: flex;
        flex-direction: column;
        background-image: url("/unsplash_kbTp7dBzHyY.png");
        background-size: cover;
        background-position: center;
        min-height: 92vh;
        padding: clamp(1.25rem, 2.1vw, 2.5rem);
        color: white;
    }

    .text h1 {
        margin-bottom: 15px;
    }

    .text-content {
        max-width: 67rem;
        font-family: "Inter", sans-serif;
        font-size: var(--fs-body);
        font-weight: 200;
        text-align: justify;
        margin-bottom: clamp(2rem, 3.6vw, 4.375rem);
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(1rem, 2.9vw, 3.4375rem);
    }

    .buttons button {
        background-color: rgba(0, 0, 0, 0.39);
        width: clamp(9rem, 20.3vw, 24.375rem);
        height: clamp(3.5rem, 6.25vw, 7.5rem);
        border: 1px solid black;
        border-radius: var(--radius);
        cursor: pointer;

        font-size: var(--fs-button);
        font-weight: 200;
        color: white;
    }

    .map-info {
        background-color: black;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 0 clamp(1.25rem, 3.1vw, 3.75rem) clamp(2rem, 4vw, 4rem);
        gap: clamp(2rem, 5.2vw, 6.25rem);
    }

    .map-info h1 {
        margin: clamp(2rem, 3.1vw, 3.75rem) 0 0 clamp(0rem, 3.1vw, 3.75rem);
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
        gap: clamp(1.25rem, 2.6vw, 3.125rem);
    }

    .about {
        background-color: #0A192F;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 0 clamp(1.25rem, 4.7vw, 5.625rem) clamp(2rem, 4vw, 4rem);
        font-family: "Inter", sans-serif;
    }

    .about h2 {
        font-weight: 200;
        font-size: var(--fs-title);
    }

    .about p {
        max-width: 87.5rem;
        font-size: var(--fs-lead);
        font-weight: 200;
        text-align: justify;
    }

    .contact-form {
        background-color: black;
        min-height: 100vh;
        display: flex;
        flex-wrap: wrap;
        padding: clamp(2rem, 4vw, 4rem) clamp(1.25rem, 3.6vw, 4.375rem);
        font-family: "Inter", sans-serif;
        align-items: center;
        gap: clamp(2rem, 4.2vw, 5rem);
    }

    .contact-form h3 {
        font-weight: bold;
        font-size: var(--fs-small);
    }

    .contact-form button {
        background-color: #757575;
        color: black;
        font-size: var(--fs-small);
        font-weight: bold;
        width: min(100%, 25.6875rem);
        height: clamp(3rem, 4vw, 4.75rem);
        border: none;
        border-radius: var(--radius);
        cursor: pointer;
    }

    .contact-form p {
        flex: 1 1 22rem;
        max-width: 61rem;
        font-size: var(--fs-title);
        font-weight: normal;
        text-align: justify;
    }

    .form {
        flex: 0 1 36rem;
        background-color: white;
        padding: clamp(1.5rem, 2.1vw, 2.5rem) clamp(1rem, 1.5vw, 1.25rem);
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: black;
        border-radius: var(--radius);
        align-items: center;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: clamp(1rem, 1.3vw, 1.5625rem);
        width: 100%;
        max-width: 27rem;
    }

    .inputs input {
        background-color: #B3B3B3;
        height: clamp(3rem, 4.2vw, 5rem);
        width: 100%;
        padding: 0 10px;
        border: none;
        font-size: var(--fs-small);
    }

    .inputs input::placeholder {
        color: #595959;
        font-weight: bold;
    }

    #message-input {
        height: clamp(6rem, 8.3vw, 10rem);
    }
</style>
