<template>
  <card class="card" title="Agregar Seguimiento">
    <div>
      <SearchServicioVue v-on:callback="callBackSearchServicio" />
    </div>
    <div>
      <FormServicioVue
        v-if="InfoServicio"
        ActionForm="EDIT"
        :DataServiceProps="InfoServicio"
      />
    </div>
    <div>
      <FormSeguimientoVue
        v-if="InfoServicio"
        :IdServicioProp="InfoServicio.id_Servicio"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>

<script>
import FormSeguimientoVue from "./FormSeguimiento.vue";
import FormServicioVue from "./FormServicio.vue";
import SearchServicioVue from "./SearchServicio.vue";
export default {
  components: {
    SearchServicioVue,
    FormServicioVue,
    FormSeguimientoVue,
  },
  data: () => ({
    InfoServicio: undefined,
  }),
  methods: {
    callBackSearchServicio(data) {
      if (typeof data === "object") {
        this.InfoServicio = data;
      } else {
        this.$notify({
          message: "Servicio no encontrado",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "error",
        });
      }
    },
    callBackClean() {
      this.InfoServicio = undefined;
    },
  },
};
</script>

<style>
</style>