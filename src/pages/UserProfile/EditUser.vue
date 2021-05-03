<template>
  <card class="card" title="Editar Usuario">
    <div>
      <SearchUserVue v-on:callback="callBackSearchUser" />
    </div>
    <div>
      <FormUserVue
        v-if="UserInfo != undefined"
        ActionForm="EDIT"
        :DataUserProps="UserInfo"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>
<script>
import FormUserVue from "./FormUser.vue";
import SearchUserVue from "./SearchUser.vue";
export default {
  components: {
    FormUserVue,
    SearchUserVue,
  },
  data: () => ({
    UserInfo: undefined,
  }),
  methods: {
    callBackSearchUser(data) {
      if (typeof data === "object") {
        this.UserInfo = data;
      } else {
        this.$notify({
          message: "Usuario no encontrado",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      }
    },
    callBackClean() {
      this.UserInfo = undefined
    },
  },
};
</script>
<style>
</style>
