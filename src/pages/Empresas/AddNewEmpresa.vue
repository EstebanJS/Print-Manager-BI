<template>
  <card class="card" title="Agregar Empresa">
    <div>
      <FormEmpresa ActionForm="ADD"/>
    </div>
  </card>
</template>

<script>
import FormEmpresa from "./FormEmpresa.vue";
export default {
  components: {
    FormEmpresa,
  },
};
</script>

<style>
</style>