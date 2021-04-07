<template>
  <card class="card" title="Agregar Usuario">
    <div>
      <FormUserVue ActionForm="ADD"/>
    </div>
  </card>
</template>

<script>
import FormUserVue from "./FormUser.vue";
export default {
  components: {
    FormUserVue,
  },
};
</script>

<style>
</style>