<template>
    <div>
      <h1>Elige a tu Pennywise</h1>
      <div v-for="(pennywise, index) in pennywises" :key="index">
        <img
          :src="pennywise.image"
          :alt="pennywise.title"
          :class="{ selected: selectedPennywise === pennywise.title }"
          @click="selectPennywise(pennywise.title)"
        />
        <p>{{ pennywise.title }}</p>
      </div>
      <div v-if="selectedPennywise">
        <p>Tu Pennywise favorito es: {{ selectedPennywise }}</p>
        <input v-model="alias" placeholder="Ingresa tu alias" />
        <button @click="resetSelection">Reiniciar selección</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const pennywises = ref([
      { title: 'Pennywise Clásico', image: 'https://media.revistavanityfair.es/photos/60e8561876b409bfd6cb90f8/master/w_3940%2Cc_limit/45130.jpg' },
      { title: 'Pennywise 2017', image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/08/pennywise-it-capitulo-1-2017-2790355.jpg?tf=3840x' },
      { title: 'Pennywise 1990', image: 'https://poweritems.com.mx/resources/uploads/images/notes/587142a583119ea205044e63d7b3c175.jpg' },
      { title: 'Pennywise 2019', image: 'https://i.pinimg.com/564x/9b/d9/38/9bd9381d36499a4dc210daac3c401f2f.jpg' },
    ]);
      const selectedPennywise = ref('');
      const alias = ref('');
  
      const selectPennywise = (title: string) => {
        selectedPennywise.value = title;
      };
  
      const resetSelection = () => {
        selectedPennywise.value = '';
        alias.value = '';
      };
  
      return { pennywises, selectedPennywise, alias, selectPennywise, resetSelection };
    },
  });
  </script>
  
  <style scoped>
  .selected {
    border: 2px solid red;
  }
  </style>