<script setup>
import axios from "axios"
import { computed, ref } from "vue"
import CharacterCard from "../components/CharacterCard.vue"

let characters = ref([])
let pagination = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
})

let current = ref(1)

let searchInput = ref('')
let search_status = ref('')
let search_gender = ref('')

await getCharacters(current.value)

async function getCharacters(page) {
    current.value = page
    const params = { page: page }

    const name = searchInput.value.trim()
    if (name) params.name = name
    if (search_status.value) params.status = search_status.value
    if (search_gender.value) params.gender = search_gender.value

    let res = await axios.get('https://rickandmortyapi.com/api/character', {
        params,
    })
    console.log(res.data)
    characters.value = res.data.results
    pagination.value = res.data.info
}

async function next() {
    await getCharacters(current.value + 1)
}

async function prev() {
    await getCharacters(current.value - 1)
}


let pages = computed(() => {
    let pages = []
    for (let i = 1; i <= 3; i++) {
        pages[i] = i
    }
    if (current.value > 6) {
        pages.push("...")
    }

    for (
        let i = current.value - 2;
        i <= current.value + 2 && i <= pagination.value.pages;
        i++
    ) {
        pages[i] = i
    }
    if (current.value < pagination.value.pages - 2) pages.push("...")

    for (let i = pagination.value.pages - 2; i <= pagination.value.pages; i++) {
        pages[i] = i
    }

    return pages.filter((p) => p)
})

//debounce
let searchTimeout = null

function search() {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(async () => {
        await getCharacters(1)
    }, 1000)
}

function status_change(status) {
    search_status.value = status
    search()
}

function gender_change(gender) {
    search_gender.value = gender
    search()
}


</script>
<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @input="search" v-model="searchInput" class="input" type="text" placeholder="Find a character">
            </div>
            <div class="control">
                <button class="button is-info" @click="search">
                    Search
                </button>
            </div>
        </div>

        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5"><strong>Status:</strong></p>
                </div>
                <div class="level-item">
                    <div class="buttons has-addons">
                        <button v-if="search_status === 'Alive'" class="button is-small is-info">Alive</button>
                        <button v-else class="button is-small" @click="status_change('Alive')">Alive</button>

                        <button v-if="search_status === 'Dead'" class="button is-small is-info">Dead</button>
                        <button v-else class="button is-small" @click="status_change('Dead')">Dead</button>

                        <button v-if="search_status === 'Unknown'" class="button is-small is-info">Unknown</button>
                        <button v-else class="button is-small" @click="status_change('Unknown')">Unknown</button>

                        <button v-if="search_status === ''" class="button is-small is-info">Clear</button>
                        <button v-else class="button is-small" @click="status_change('')">Clear</button>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <p class="subtitle is-5"><strong>Gender:</strong></p>
                </div>
                <div class="level-item">
                    <div class="buttons has-addons">
                        <button v-if="search_gender === 'Male'" class="button is-small is-info">Male</button>
                        <button v-else class="button is-small" @click="gender_change('Male')">Male</button>

                        <button v-if="search_gender === 'Female'" class="button is-small is-info">Female</button>
                        <button v-else class="button is-small" @click="gender_change('Female')">Female</button>

                        <button v-if="search_gender === 'Unknown'" class="button is-small is-info">Unknown</button>
                        <button v-else class="button is-small" @click="gender_change('Unknown')">Unknown</button>

                        <button v-if="search_gender === ''" class="button is-small is-info">Clear</button>
                        <button v-else class="button is-small" @click="gender_change('')">Clear</button>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <button class="pagination-previous" :disabled="!pagination.prev" @click="prev">
                Previous
            </button>
            <button class="pagination-next" :disabled="!pagination.next" @click="next">
                Next page
            </button>
            <ul class="pagination-list">
                <li v-for="page in pages">
                    <span v-if="page === '...'" class="pagination-ellipsis">&hellip;</span>
                    <button v-else-if="page === current" class="pagination-link is-current" aria-label="Page 46"
                        aria-current="page">
                        {{ page }}
                    </button>
                    <button v-else class="pagination-link" aria-label="Goto page 1" @click="getCharacters(page)">
                        {{ page }}
                    </button>
                </li>
            </ul>
        </nav>
        <div class="columns is-multiline">
            <div class="column is-3" v-for="character in characters">
                <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
    </div>
</template>