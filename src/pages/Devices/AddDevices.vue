<template>
  <card class="card" title="Agregar Dispositivo">
    <div>
      <FormDevicesVue ActionForm="ADD" />
    </div>
  </card>
</template>
<script>
import FormDevicesVue from './FormDevices.vue';
FormDevicesVue
export default {
  components: {
    FormDevicesVue,
  },
};
</script>
<style>
</style>
