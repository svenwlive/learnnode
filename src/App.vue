<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import RouterTabs from './components/RouterTabs.vue';

let titles = ref([
    'ToDo',
    'Modals',
]);
let activeTab = ref(0);
let contents = ref([
    ToDo,
    Modals
]);

</script>

<template>
    <RouterTabs></RouterTabs>
    <RouterView></RouterView>
</template>

<style></style>