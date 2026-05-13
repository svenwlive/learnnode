import { createApp } from 'vue';

import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue';
import Validation from './pages/Validation.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import canvas from './pages/CanvasExample.vue';
import WebApis from './pages/WebApis.vue';
import Leaflet from './pages/Leaflet.vue';


const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/messages', component: Messages, name: 'Messages' },
  { path: '/validation', component: Validation, name: 'Validation' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick and Morty' },
  { path: '/canvas', component: canvas, name: 'canvas' },
  { path: '/webapis', component: WebApis, name: 'Web APIs' },
  { path: '/leaflet', component: Leaflet, name: 'Leaflet' }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');