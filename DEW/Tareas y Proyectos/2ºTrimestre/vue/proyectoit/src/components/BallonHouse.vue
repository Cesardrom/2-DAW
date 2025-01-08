<template>
    <div>
      <h1>La casa flotante de los globos rojos</h1>
      <input type="range" v-model="balloonCount" min="1" max="20" />
      <div v-for="n in balloonCount" :key="n" class="balloon"></div>
      <button @click="showMessage">Mostrar mensaje</button>
      <p v-if="messageVisible">{{ message }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  export default defineComponent({
    setup() {
      const balloonCount = ref(1);
      const messageVisible = ref(false);
  
      const message = computed(() => {
        return balloonCount.value >= 10 ? "Todos flotan aquí" : "";
      });
  
      const showMessage = () => {
        messageVisible.value = balloonCount.value >= 10;
      };
  
      return { balloonCount, messageVisible, showMessage, message };
    },
  });
  </script>
  
  <style scoped>
  .balloon {
    width: 20px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
    margin: 5px;
  }
  </style>