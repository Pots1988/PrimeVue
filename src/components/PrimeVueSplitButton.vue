<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const items = [
  {
    label: 'Update',
    command: () => {
      toast.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Data Updated',
        life: 3000,
      });
    },
  },
  {
    label: 'Delete',
    command: () => {
      toast.add({
        severity: 'warn',
        summary: 'Delete',
        detail: 'Data Deleted',
        life: 3000,
      });
    },
  },
  {
    separator: true,
  },
  {
    label: 'Quit',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    },
  },
];

const save = (): void => {
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Data Saved',
    life: 3000,
  });
};
</script>

<template>
  <div class="flex gap-4 flex-wrap">
    <Toast />
    <SplitButton
      label="Save"
      @click="save"
      :model="items"
    />
    <SplitButton
      icon="pi pi-check"
      dropdownIcon="pi pi-cog"
      label="Save"
      severity="warn"
      @click="save"
      :model="items"
    />
    <SplitButton
      icon="pi pi-check"
      dropdownIcon="pi pi-cog"
      label="Save"
      severity="warn"
      disabled
      @click="save"
      :model="items"
    />
    <SplitButton
      label="Save"
      raised
      @click="save"
      :model="items"
    />
    <SplitButton
      label="Save"
      rounded
      @click="save"
      :model="items"
    />
  </div>
</template>
