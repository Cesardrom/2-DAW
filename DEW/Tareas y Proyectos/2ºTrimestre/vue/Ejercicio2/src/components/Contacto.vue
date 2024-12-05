<template>
  <div class="container">
    <h1>{{ $t("contacto.title") }}</h1>
    <form @submit.prevent="enviarMensaje">
      <div class="mb-3">
        <label for="name" class="form-label">{{ $t("contacto.form.name") }}</label>
        <input v-model="form.name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for ="email" class="form-label">{{ $t("contacto.form.email") }}</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">{{ $t("contacto.form.message") }}</label>
        <textarea v-model="form.message" class="form-control" id="message" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">{{ $t("contacto.form.submit") }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { db } from '../firebase.js';

export default defineComponent({
  name: 'Contacto',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: '',
    });

    const enviarMensaje = () => {
      db.collection('mensajes')
        .add(form)
        .then(() => {
          alert('Mensaje enviado correctamente.');
          form.name = '';
          form.email = '';
          form.message = '';
        })
        .catch((error) => {
          console.error('Error al enviar el mensaje: ', error);
          alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
        });
    };

    return {
      form,
      enviarMensaje,
    };
  },
});
</script>