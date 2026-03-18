<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    let joke = ref('')
    // function reqListener() {
    //     let data = JSON.parse(this.responseText);
    //     console.log(data.value);
    //     joke.value = data.value;
    // }

    // const req = new XMLHttpRequest();
    // req.addEventListener("load", reqListener);
    // req.open("GET", "https://api.chucknorris.io/jokes/random");
    // req.send();

    // let req = fetch("https://api.chucknorris.io/jokes/random").then(res => {
    //     return res.json();
    // }).then(data => {
    //     joke.value = data.value;
    // });

    // let res = await fetch("https://api.chucknorris.io/jokes/random");
    // let data = await res.json();
    // joke.value = data.value;

    let res = await axios.get("https://api.chucknorris.io/jokes/random");
    let data = await res.data;
    joke.value = res.data.value;

</script>

<template>
    <div class="container content">
        <h1>{{ joke }}</h1>
    </div>
</template>