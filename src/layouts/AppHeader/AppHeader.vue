<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { routes } from '@/router/routes';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex flex-wrap items-center gap-4">
        <Button
          v-for="route in routes"
          :key="route.name"
          asChild
          v-slot="slotProps"
          severity="info"
        >
          <RouterLink
            :to="{ name: route.name }"
            :class="slotProps.class"
          >
            {{ route.title }}
          </RouterLink>
        </Button>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
