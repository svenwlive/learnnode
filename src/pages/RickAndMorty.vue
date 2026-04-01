<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});

let current = ref(1);

// let res = await axios.get("https://rickandmortyapi.com/api/character");
// characters.value = res.data.results;
// pagination.value = res.data.info;

await getCharacters(current.value);

async function getCharacters(page) {
    current.value = page;
    let res = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: page
        }
    });
    characters.value = res.data.results;
    pagination.value = res.data.info;
}


async function next() {
    await getCharacters(current.value+1);
    
}
async function prev() {
    await getCharacters(current.value-1);
}

let pages = computed(() => {
    let pages = [];
    for(let i = 1; i<=3; i++) {
        pages[i] = i;
    }
    if(current.value > 6) {
        pages.push("...");
    };
    
    for(let i = current.value - 2; i<=current.value + 2 && i <= pagination.value.pages; i++) {
        pages[i] = i;
    }
    if(current.value < pagination.value.pages - 2) {
        pages.push("...");
    }
    for(let i = pagination.value.pages - 2; i<=pagination.value.pages; i++) {
        pages[i] = i;
    }

    return pages.filter(p => p);
});

</script>
<template>
    <div class="container">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <button class="button" :disabled="!pagination.prev" @click="prev">Prev</button>
            <button class="button" @click="next" :disabled="!pagination.next">Next</button>
            <ul class="pagination-list">
                <li v-for="page in pages">
                    <span v-if="page === '...'" class="pagination-ellipsis">&hellip;</span>
                    <button v-else-if="page === current" class="pagination-link" aria-label="Page 46">{{ page }}</button>
                    <button v-else class="pagination-link" aria-label="Goto page 1" @click="getCharacters(page)">{{ page }}</button>
                </li>
            </ul>
        </nav>
        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters">
                <CharacterCard :character="character" />
            </div>
        </div>
    </div>
</template>