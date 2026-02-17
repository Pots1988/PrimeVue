<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-center">
    <Button
      @click="confirm1()"
      label="Save"
      variant="outlined"
    ></Button>
    <Button
      @click="confirm2()"
      label="Delete"
      severity="danger"
      variant="outlined"
    ></Button>
  </div>

  <ConfirmPopup></ConfirmPopup>
  <div class="card flex flex-wrap gap-2 justify-center">
    <Button
      @click="confirm3($event)"
      label="Save"
      variant="outlined"
    ></Button>
    <Button
      @click="confirm4($event)"
      label="Delete"
      severity="danger"
      variant="outlined"
    ></Button>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
  confirm.require({
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Save',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      });
    },
  });
};

const confirm2 = () => {
  confirm.require({
    message: 'Do you want to delete this record?',
    header: 'Danger Zone',
    icon: 'pi pi-info-circle',
    rejectLabel: 'Cancel',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Record deleted',
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      });
    },
  });
};

const confirm3 = (event: MouseEvent) => {
  confirm.require({
    target: event.currentTarget as HTMLElement,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Save',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      });
    },
  });
};

const confirm4 = (event: MouseEvent) => {
  confirm.require({
    target: event.currentTarget as HTMLElement,
    message: 'Do you want to delete this record?',
    icon: 'pi pi-info-circle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Record deleted',
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      });
    },
  });
};
</script>

<style scoped></style>
