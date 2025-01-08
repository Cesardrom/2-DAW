<template>
    <div>
      <h1>La maldición de Derry</h1>
      <select v-model="selectedType">
        <option value="all">Todos</option>
        <option value="deaths">Muertes</option>
        <option value="disappearances">Desapariciones</option>
        <option value="paranormal">Fenómenos Paranormales</option>
      </select>
      <div v-for="event in filteredEvents" :key="event.id" @click="selectEvent(event)">
        <p>{{ event.type }}: {{ event.description }}</p>
      </div>
      <button @click="resetEvents">Reiniciar</button>
      <div v-if="selectedEvent">
        <h2>Detalles del Evento</h2>
        <p>Tipo: {{ selectedEvent.type }}</p>
        <p>Descripción: {{ selectedEvent.description }}</p>
        <p>Fecha: {{ selectedEvent.date }}</p>
        <p>Víctimas: {{ selectedEvent.victims }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  export default defineComponent({
    setup() {
      const events = ref([
        { id: 1, type: 'deaths', description: 'Muerte misteriosa en el lago', date: '1980-01-01', victims: '5' },
        { id: 2, type: 'disappearances', description: 'Desaparición de un niño', date: '1985-05-15', victims: '1' },
        { id: 3, type: 'paranormal', description: 'Fenómenos extraños en la escuela', date: '1990-10-10', victims: '0' },
      ]);
      const selectedType = ref('all');
      const selectedEvent = ref(null);
  
      const filteredEvents = computed(() => {
        return selectedType.value === 'all' ? events.value : events.value.filter(event => event.type === selectedType.value);
      });
  
      const selectEvent = (event: boolean) => {
        selectedEvent.value = event;
      };
  
      const resetEvents = () =>  {
        selectedEvent.value = null;
        selectedType.value = 'all';
      };
  
      return { events, selectedType, filteredEvents, selectEvent, resetEvents, selectedEvent };
    },
  });
  </script>
  
  <style scoped>
  /* Estilos para los eventos */
  </style>