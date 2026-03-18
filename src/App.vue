<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';
</script>

<template>
    <RouterTabs></RouterTabs>
    <suspense>
        <RouterView></RouterView>
    </suspense>
</template>

<style></style>