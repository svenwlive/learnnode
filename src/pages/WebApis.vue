<script setup>
    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    };
</script>
<template>

</template>