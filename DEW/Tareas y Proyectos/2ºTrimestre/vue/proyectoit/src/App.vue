<template>
  <div id="app">
    <PennywiseSelector />
    <BalloonHouse />
    <CursedEvents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PennywiseSelector from './components/PennywiseSelector.vue';
import BalloonHouse from './components/BallonHouse.vue';
import CursedEvents from './components/CursedEvents.vue'; 

export default defineComponent({
  components: {
    PennywiseSelector,
    BalloonHouse,
    CursedEvents,
  },
});
</script>

<style>
/* Estilos globales */
</style>