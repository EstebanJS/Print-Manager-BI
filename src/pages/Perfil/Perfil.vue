<template>
  <div>
    <CardProfileVue :DataUser="getDataUser" />
    <ChangePassVue :DataUser="getDataUser" />
  </div>
</template>

<script>
ChangePassVue;
import CardProfileVue from "./CardProfile.vue";
import ChangePassVue from "./ChangePass.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CardProfileVue,
    ChangePassVue,
  },
  computed: {
    ...mapGetters("users", ["getDataUser"]),
  },
};
</script>

<style>
</style>