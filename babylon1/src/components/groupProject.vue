<template>
  <div>
    <h3>Software Engineering Group Project</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { basicScene } from '@/groupProject/basicScene';

export default defineComponent({
  name: 'groupProject',
  mounted() {
    const canvas = document.querySelector("canvas")!;
    new basicScene(canvas)
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  width: 70%;
  height: 70%;
}
</style>
