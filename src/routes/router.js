import { createRouter, createMemoryHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Dados from "@/pages/Dados.vue";
import Mapa from "@/pages/Mapa.vue";
import Sobre from "@/pages/Sobre.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dados',
        name: 'Dados',
        component: Dados
    },
    {
        path: '/mapa',
        name: 'Mapa',
        component: Mapa
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;
