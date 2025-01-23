<template>
    <div>
      <h1>Lista de Tareas</h1>
      <form @submit.prevent="agregarTarea">
        <input v-model="nuevaTarea.nombre" placeholder="Título de la tarea" required />
        <input type="date" v-model="nuevaTarea.fechaLimite" required />
        <button type="submit">Agregar Tarea</button>
      </form>
  
      <div>
        <button @click="mostrarPendientes = !mostrarPendientes">
          {{ mostrarPendientes ? 'Mostrar Completadas' : 'Mostrar Pendientes' }}
        </button>
      </div>
  
      <ul>
        <li v-for="(tarea, index) in tareasFiltradas" :key="index">
          <span :class="{ 'tachado': tarea.completado }">{{ tarea.nombre }} - {{ tarea.fechaLimite }}</span>
          <button @click="completarTarea(index)">Completar</button>
          <button @click="eliminarTarea(index)">Eliminar</button>
        </li>
      </ul>
  
      <p>Tareas pendientes: {{ tareasPendientes }}</p>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const tareas = ref([]);
      const nuevaTarea = ref({ nombre: '', completado: false, fechaLimite: '' });
      const mostrarPendientes = ref(true);
  
      const agregarTarea = () => {
        if (nuevaTarea.value.nombre && nuevaTarea.value.fechaLimite) {
          tareas.value.push({ ...nuevaTarea.value });
          nuevaTarea.value = { nombre: '', completado: false, fechaLimite: '' };
        }
      };
  
      const completarTarea = (index) => {
        tareas.value[index].completado = true;
      };
  
      const eliminarTarea = (index) => {
        tareas.value.splice(index, 1);
      };
  
      const tareasFiltradas = computed(() => {
        return tareas.value.filter(tarea => tarea.completado === !mostrarPendientes.value);
      });
  
      const tareasPendientes = computed(() => {
        return tareas.value.filter(tarea => !tarea.completado).length;
      });
  
      return {
        tareas,
        nuevaTarea,
        agregarTarea,
        completarTarea,
        eliminarTarea,
        tareasFiltradas,
        tareasPendientes,
        mostrarPendientes,
      };
    },
  };
  </script>
  
  <style>
  .tachado {
    text-decoration: line-through;
  }
  </style>