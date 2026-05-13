<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

let center = ref([59.4269, 24.7434]);

</script>
<template>
    <button class="is-primary button" @click="center = [59.4269, 24.7434]">Reset View</button>
    <LeafletMap :center="center" :zoom="18"></LeafletMap>
</template>