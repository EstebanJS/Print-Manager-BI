<template>
  <card class="card" title="Agregar Dispositivo">
    <div>
      <FormUserVue ActionForm="ADD" />
    </div>
  </card>
</template>
<script>
import FormUserVue from "../UserProfile/FormUser.vue";
export default {
  components: {
    FormUserVue,
  },
};
</script>
<style>
</style>
