<template>
  <div class="container">
    <h1>{{ $t("proyectos.title") }}</h1>
    <div class="row">
      <div v-for="card in $t('proyectos.cards')" :key="card.title" class="col-md-4">
        <TarjetaProyecto :card="card" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaProyecto from './TarjetaProyecto.vue ';

export default defineComponent({
  name: 'Proyectos',
  components: {
    TarjetaProyecto,
  },
});
</script>