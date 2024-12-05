<template>
  <div class="container">
    <h1>{{ $t("habilidades.title") }}</h1>
    <div class="row">
      <div v-for="card in $t('habilidades.cards')" :key="card.name" class="col-md-4">
        <TarjetaHabilidad :card="card" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaHabilidad from './TarjetaHabilidad.vue';

export default defineComponent({
  name: 'Habilidades',
  components: {
    TarjetaHabilidad,
  },
});
</script>