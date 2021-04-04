<template>
  <card class="card">
    <div>
      <SearchModelDevicesVue v-on:callback="callBackSearchModelo"/>
    </div>
    <div>
      <FormModelDevicesVue
        v-if="ModeloDispositivoInfo != undefined"
        ActionForm="EDIT"
        :DataModelProps="ModeloDispositivoInfo"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>

<script>
import FormModelDevicesVue from "./FormModelDevices.vue";
import SearchModelDevicesVue from "./SearchModelDevices.vue";
export default {
  components: {
    FormModelDevicesVue,
    SearchModelDevicesVue,
  },
  data: () => ({
    ModeloDispositivoInfo: undefined,
  }),
  methods: {
    callBackSearchModelo(data) {
      if (typeof data === "object") {
        this.ModeloDispositivoInfo = data;
      } else {
        this.$notify({
          message: "Modelo no encontrado",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "error",
        });
      }
    },
    callBackClean() {
      this.ModeloDispositivoInfo = undefined;
    },
  },
};
</script>

<style>
</style>