<template>
  <card class="card" title="Editar Empresa">
    <div>
      <SearchEmpresaVue v-on:callback="callBackSearchEmpresa" />
    </div>
    <div>
      <FormEmpresa
        v-if="EmpresaInfo != undefined"
        ActionForm="EDIT"
        :DataEmpresaProps="EmpresaInfo"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>

<script>
import FormEmpresa from "./FormEmpresa.vue";
import SearchEmpresaVue from "./SearchEmpresa.vue";
export default {
  components: {
    FormEmpresa,
    SearchEmpresaVue,
  },
  data: () => ({
    EmpresaInfo: undefined,
  }),
  methods: {
    callBackSearchEmpresa(data) {
      if (typeof data === "object") {
        this.EmpresaInfo = data;
      } else {
        this.$notify({
          message: "Empresa no encontrado",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "error",
        });
      }
    },
    callBackClean() {
      this.EmpresaInfo = undefined;
    },
  },
};
</script>

<style>
</style>