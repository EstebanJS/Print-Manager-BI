<template>
  <card class="card" title="Agregar Modelo Dispositivo">
    <div>
      <FormModelDevicesVue ActionForm="ADD"/>
    </div>
  </card>
</template>

<script>
import FormModelDevicesVue from "./FormModelDevices.vue";
export default {
  components: {
    FormModelDevicesVue,
  },
};
</script>

<style>
</style>