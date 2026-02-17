<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { routes } from '@/router/routes';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex flex-wrap items-center gap-4">
        <RouterLink
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          v-slot="{ href, navigate, isActive }"
        >
          <Button
            asChild
            v-slot="slotProps"
            :severity="isActive ? 'success' : 'info'"
          >
            <a
              :href="href"
              @click="navigate"
              :class="[slotProps.class]"
            >
              {{ route.title }}
            </a>
          </Button>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
