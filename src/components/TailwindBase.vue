<template>
  <div
    class="has-hover:border-amber-600 border-2 border-transparent rounded-xl m-10 w-300 mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 lg:grid-cols-6 p-6 group"
  >
    <button
      class="first:p-10 last:p-0 font-medium bg-sky-500 hover:bg-sky-700 p-4 rounded-xl text-white disabled:bg-sky-900 blur-xs grayscale-sm group-hover:underline"
    >
      Button
    </button>
    <button
      class="first:p-10 last:p-0 font-medium bg-amber-500 hover:bg-amber-700 p-4 rounded-xl text-white disabled:bg-amber-900 group-hover:underline"
    >
      Button
    </button>
    <button
      class="first:p-10 last:p-0 font-medium bg-emerald-400 hover:bg-emerald-700 p-4 rounded-xl text-white disabled:bg-emerald-900 group-hover:underline"
    >
      Button
    </button>
    <button class="p-4 text-[22px] bg-fuchsia-500 rounded-xl text-white">
      Button
    </button>
  </div>
  <TailwindStates />
</template>

<script setup lang="ts"></script>

<style scoped></style>
