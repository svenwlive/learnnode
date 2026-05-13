<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref, watch } from 'vue';

const {center, zoom} = defineProps(['center', 'zoom']);
let map = null;
onMounted(() => {
  map = L.map('map').setView(center, zoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
});
watch(() => center, (newCenter) => {
  map.flyTo(newCenter, zoom);
});
</script>
<template>
  <div id="map" style="height: 800px; margin: 20px;"></div>
</template>
