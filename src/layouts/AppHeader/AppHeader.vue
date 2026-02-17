<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/buttons">Buttons</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
