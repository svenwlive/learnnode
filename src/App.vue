<script setup>
import { ref } from 'vue';

    let items = ref(['Sai', 'Piim', 'Viin']);
    let newItem = ref('');
function add() {
    if(newItem.value.trim() != '') {
        items.value.push(newItem.value.trim());
    };
    newItem.value = '';
}
</script>

<template>
    <div class="container">
        <div class="field has-addons mt-2">
            <div class="control is-expanded">
                <input class="input" type="text" v-model="newItem" placeholder="Enter text..." @keypress.enter="add()">
            </div>
            <div class="control">
                <button class="button is-info" @click="add()">
                    Add item
                </button>
            </div>
        </div>
        <div class="content">
            <h1>All Items</h1>
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style>

</style>