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
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    h1 {
        font-size: 64px;
        font-weight: normal;
    }

    .home {
        color: white;
    }

    .text {
        display: flex;
        flex-direction: column;
        background-image: url("/unsplash_kbTp7dBzHyY.png");
        height: 92vh;
        padding: 40px;
        color: white;
    }

    .text h1 {
        margin-bottom: 15px;
    }

    .text-content {
        height: fit-content;
        width: 1070px;
        font-family: "Inter", sans-serif;
        font-size: 32px;
        font-weight: 200;
        text-align: justify;
        margin-bottom: 70px;
    }

    .buttons {
        display: flex;
        flex-direction: space-between;
        gap: 55px;
    }

    .buttons button {
        background-color: rgba(0, 0, 0, 0.39);
        width: 390px;
        height: 120px;
        border: 1px solid black;
        border-radius: 30px;
        
        font-size: 36px;
        font-weight: 200;
        color: white;
    }

    .map-info {
        background-color: black;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 0px 60px 0px 60px; 
        gap: 100px;
    }

    .map-info h1 {
        margin: 60px 0px 0px 60px;
    }

    .cards {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    .about {
        background-color: #0A192F;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 0px 90px 0px 90px;
        font-family: "Inter", sans-serif;
    }

    .about h2 {
        font-weight: 200;
        font-size: 48px;
    }

    .about p {
        width: 1400px;
        font-size: 40px;
        font-weight: 200;
        text-align: justify;
    }

    .contact-form {
        background-color: black;
        height: 100vh;
        display: flex;
        padding: 0px 70px 0px 70px;
        font-family: "Inter", sans-serif;
        align-items: center;
        gap: 80px;
    }

    .contact-form h3 {
        font-weight: bold;
        font-size: 28px;
    }

    .contact-form button {
        background-color: #757575;
        color: black;
        font-size: 28px;
        font-weight: bold;
        width: 411px;
        height: 76px;
        border: none;
        border-radius: 30px;
    }

    .contact-form p {
        width: 976px;
        font-size: 48px;
        font-weight: normal;
        text-align: justify;
        max-height: 580px;
    }

    .form {
        background-color: white;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: black;
        height: 610px;
        width: 576px;
        border-radius: 30px;
        margin-top: 60px;
        align-items: center;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .inputs input {
        background-color: #B3B3B3;
        height: 80px;
        width: 432px;
        border: none;
    }

    .inputs input::placeholder {
        padding-left: 10px;
        color: #595959;
        font-weight: bold;
        font-size: 28px;
    }

    #message-input {
        height: 160px;
    }
</style>
