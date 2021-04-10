<template>
  <div>
    <CardProfileVue />
    <ChangePassVue />
  </div>
</template>

<script>
ChangePassVue;
import CardProfileVue from "./CardProfile.vue";
import ChangePassVue from "./ChangePass.vue";
export default {
  components: {
    CardProfileVue,
    ChangePassVue,
  },
};
</script>

<style>
</style>