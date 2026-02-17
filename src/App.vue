<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import PrimeVueButtons from './components/PrimeVueButtons.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <PrimeVueButtons />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
