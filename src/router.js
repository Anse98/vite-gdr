import { createRouter, createWebHistory } from 'vue-router';
import CharacterIndex from './pages/Index.vue';
import Home from './pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/characters',
            name: 'characters.index',
            component: CharacterIndex
        }
    ]
})

export { router }