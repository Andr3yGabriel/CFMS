<script setup>
    import Header from '@/components/Header.vue';
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const limit = ref(20)
    const offset = ref(0)
    const pokemons = ref([]);
    const waiting = ref(false);
    const error = ref(null);

    let controller = null;

    async function getPokemons() {
        if (controller) controller.abort();
        controller = new AbortController();

        waiting.value = true;
        error.value = null;

        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
                params: { limit: limit.value, offset: offset.value },
                signal: controller.signal,
                timeout: 5000
            });

            pokemons.value = response.data.results
        } catch (e) {
            if (axios.isCancel(e) || e.code === 'ERR_CANCELED') return
            error.value = e.response ? `Erro HTTP: ${e.response.status}` : e.message 
        } finally {
            waiting.value = false
        }
    }

    function nextPage() {
        offset.value += limit.value
        getPokemons()
    }
    
    function previousPage() {
        offset.value = Math.max(0, offset.value - limit.value)
        getPokemons()
    }
</script>

<template>
    <Header/>
    
    <div>
        <label>
            Limite:
            <input type="number" v-model.number="limit" min="1" max="100" />
        </label>
        <label>
            Offset:
            <input type="number" v-model.number="offset" min="0" />
        </label>
        <button @click="getPokemons" :disabled="waiting">Buscar</button>

        <p v-if="waiting">Carregando...</p>
        <p v-else-if="error">Erro: {{ error }}</p>
        <ul v-else>
            <li v-for="p in pokemons" :key="p.name">{{ p.name }}</li>
        </ul>

        <button @click="previousPage" :disabled="offset === 0 || waiting">Anterior</button>
        <button @click="nextPage" :disabled="waiting">Próxima</button>

    </div>
</template>