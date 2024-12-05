<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Portafolio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/sobremi">{{ $t("sobreMi.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/proyectos">{{ $t("proyectos.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/habilidades">{{ $t("habilidades.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/experiencia">{{ $t("experiencia.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacto">{{ $t("contacto.title") }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NavBar',
  });
  </script>