<script setup lang="ts">
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
  {
    label: 'Add',
    icon: 'pi pi-pencil',
    command: () => {
      toast.add({
        severity: 'info',
        summary: 'Add',
        detail: 'Data Added',
        life: 3000,
      });
    },
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      toast.add({
        severity: 'success',
        summary: 'Update',
        detail: 'Data Updated',
        life: 3000,
      });
    },
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {
      toast.add({
        severity: 'error',
        summary: 'Delete',
        detail: 'Data Deleted',
        life: 3000,
      });
    },
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      router.push('/');
    },
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    },
  },
]);
</script>

<template>
  <div class="card">
    <div
      style="position: relative; height: 500px"
      class="flex items-center justify-center"
    >
      <SpeedDial
        :model="items"
        direction="up"
        type="semi-circle"
        :radius="80"
        style="position: absolute; left: calc(50% - 2rem); bottom: 0"
      />
      <SpeedDial
        :model="items"
        type="quarter-circle"
        :radius="120"
        direction="down-right"
        style="position: absolute; left: 0; top: 0"
      />
      <SpeedDial
        :model="items"
        direction="left"
        :tooltipOptions="{ position: 'top', event: undefined }"
        style="position: absolute; top: calc(50% - 2rem); right: 0"
      />
      <SpeedDial
        :model="items"
        direction="right"
        mask
        style="position: absolute; top: calc(50% - 2rem); left: 0"
      />
      <SpeedDial
        :model="items"
        :radius="80"
        type="circle"
        :style="{ position: 'absolute' }"
        :buttonProps="{ severity: 'warn', rounded: true }"
      />
      <Toast />
    </div>
  </div>
</template>
