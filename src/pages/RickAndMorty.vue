<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});
let res = await axios.get("https://rickandmortyapi.com/api/character");
characters.value = res.data.results;
pagination.value = res.data.info;

await getCharacters("https://rickandmortyapi.com/api/character")

async function getCharacters(url) {
    let res = await axios.get(url);
    characters.value = res.data.results;
    pagination.value = res.data.info;
}

async function next() {
    await getCharacters(pagination.value.next);
}
async function prev() {
    await getCharacters(pagination.value.prev);
}

</script>
<template>
    <div class="container">
        <button class="button is-primary" :disabled="!pagination.prev" @click="prev">Prev</button>
        <button class="button is-primary" @click="next" :disabled="!pagination.next">Next</button>
        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters">
                <CharacterCard :character="character" />
            </div>
        </div>
    </div>
</template>