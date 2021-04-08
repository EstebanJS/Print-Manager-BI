<template>
  <card class="card" title="Agregar Servicio">
    <div>
      <FormServicio ActionForm="ADD"/>
    </div>
  </card>
</template>

<script>
import FormServicio from "./FormServicio";
export default {
  components: {
    FormServicio,
  },
};
</script>

<style>
</style>