<script setup>
import { onMounted, useTemplateRef } from 'vue';

const c = useTemplateRef('myCanvas');
let x = 200;
let y = 200;
onMounted(() => {
//   const ctx = c.value.getContext('2d');
//   ctx.beginPath();
//   ctx.arc(95, 50, 40, 0, 2 * Math.PI);
//   ctx.fillStyle = '#58c8343f';
//   ctx.fill();
//   ctx.strokeStyle = '#00aaff';
//   ctx.lineWidth = 3;
//   ctx.stroke();
// let ctx = c.value.getContext('2d');
// setInterval(() => {
//     ctx.clearRect(0,0,1800,800);
//     ctx.beginPath();
//     ctx.arc(x, 200, 40, 0, 2 * Math.PI);
//     ctx.fillStyle = '#ff00ff0f';
//     ctx.strokeStyle = 'green';
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
//     x+=20;
// }, 1000/144);
    let ctx = c.value.getContext('2d');
    setInterval(() => {
        ctx.clearRect(0,0,1800,800);
        drawBall(x, y, ctx);
        x+=1;
    }, 1000/144);
});
function drawBall(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff00ff5f';
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
    <canvas ref="myCanvas" class="is-centered" height="800" width="1800"></canvas>
</template>
<style>
/* body {
  background-color: white;
  color: black
} */
canvas {
  border: 1px solid white;
}
</style>