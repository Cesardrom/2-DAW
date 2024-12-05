<template>
    <div class="card">
      <div class="card-body">
        <img :src="card.logo" alt="Logo de la habilidad" />
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">{{ card.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TarjetaHabilidad',
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  });
  </script>