<template>
  <div class="container">
    <h1>{{ $t("sobreMi.title") }}</h1>
    <img src="ruta/foto.jpg" alt="Foto de perfil" />
    <p>{{ $t("sobreMi.description") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SobreMi',
});
</script>