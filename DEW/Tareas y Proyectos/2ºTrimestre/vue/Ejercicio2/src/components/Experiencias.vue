<template>
  <div class="container">
    <h1>{{ $t("experiencia.title") }}</h1>
    <p>{{ $t("experiencia.description") }}</p>
    <a href="ruta/cv.pdf" class="btn btn-primary">Descargar CV</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Experiencia',
});
</script>