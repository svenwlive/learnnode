<script setup>
import { onMounted, useTemplateRef } from 'vue';

const c = useTemplateRef('myCanvas');
let x = 200;
let y = 200;
onMounted(() => {
    let ctx = c.value.getContext("2d");
    setInterval(()=> {
        ctx.clearRect(0,0,1800,800);
        drawBall(x, y, ctx);
    }, 1000/60);
});
function drawBall(x, y, ctx) {
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(255,0,255, 0.1)';
        ctx.strokeStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
}
function move(event) {
    let rect = event.target.getBoundingClientRect();
    let pos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
    x = pos.x;
    y = pos.y;
}
</script>

<template>
  <canvas @mousemove="move" ref="myCanvas" height="800" width="1800"></canvas>
</template>
<style>
canvas {
    border: 1px solid black;
}
</style>