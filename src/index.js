import { createApp } from 'vue';

import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue';
import Validation from './pages/Validation.vue';
import ChuckNorris from './pages/ChuckNorris.vue';


const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/messages', component: Messages, name: 'Messages' },
  { path: '/validation', component: Validation, name: 'Validation' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');