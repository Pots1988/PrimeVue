<script setup lang="ts">
const loading = ref(false);

// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Button label="Submit" />
    <Button
      icon="pi pi-home"
      label="Submit"
      severity="secondary"
    />
    <Button
      label="Save"
      icon="pi pi-check"
      iconPos="right"
      severity="success"
    />
    <Button
      label="Search"
      icon="pi pi-search"
      iconPos="top"
      severity="warn"
    />
    <Button
      label="Set loading"
      icon="pi pi-refresh"
      iconPos="bottom"
      severity="help"
      @click="loading = !loading"
    />
    <Button
      type="button"
      label="Update"
      icon="pi pi-search"
      severity="danger"
      :loading="loading"
    />
    <Button
      label="Link"
      variant="link"
    />
    <Button
      as="a"
      label="External"
      href="https://vuejs.org/"
      target="_blank"
      severity="contrast"
      rel="noopener"
    />
    <Button
      asChild
      v-slot="slotProps"
    >
      <RouterLink
        to="/"
        :class="slotProps.class"
      >
        Router
      </RouterLink>
    </Button>
    <Button
      label="Link"
      disabled
    />
    <Button
      label="Raised"
      icon="pi pi-refresh"
      severity="help"
      raised
    />
    <Button
      label="Rounded"
      icon="pi pi-refresh"
      severity="warn"
      rounded
    />
    <Button
      label="Text"
      icon="pi pi-refresh"
      severity="warn"
      text
    />
    <Button
      label="Raised text"
      icon="pi pi-refresh"
      severity="warn"
      text
      raised
    />
    <Button
      label="Raised text"
      icon="pi pi-refresh"
      variant="outlined"
    />
    <Button icon="pi pi-refresh" />
    <Button
      label="Badge"
      icon="pi pi-refresh"
      badge="2"
    />
    <Button
      label="Badge"
      icon="pi pi-refresh"
      badge="2"
      badgeSeverity="contrast"
    />
    <ButtonGroup>
      <Button
        label="Save"
        icon="pi pi-check"
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
      />
    </ButtonGroup>

    <Button
      label="Small"
      icon="pi pi-check"
      size="small"
    />
    <Button
      label="Normal"
      icon="pi pi-check"
    />
    <Button
      label="Large"
      icon="pi pi-check"
      size="large"
    />
  </div>
</template>
