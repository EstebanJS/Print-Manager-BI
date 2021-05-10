<template>
  <form v-on:submit.prevent="EventButton">
    <div class="row">
      <div class="col-md-12">
        <fg-input
          type="text"
          label="Número de servicio"
          placeholder="Ingrese número de servicio"
          v-model="servicio"
        >
        </fg-input>
      </div>
    </div>
    <div>
      <input type="submit" value="Buscar servicio" class="btn btn-round btn-info">
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { validarCaracteres, validarSoloNumeros } from "@/lib/validation.js";
export default {
  data: () => ({
    servicio: undefined,
  }),
  methods: {
    ...mapActions("servicios", ["actSearchService"]),
    async EventButton() {
      if (
        this.servicio !== "" &&
        validarCaracteres(this.servicio) &&
        validarSoloNumeros(this.servicio)
      ) {
        const { status, data } = await this.actSearchService(this.servicio);
        if (status === 200) {
          this.$emit("callback", data);
        } else if (status === 204) {
          this.$notify({
            message: "El servicio se encuentra cerrado",
            icon: "ti-info",
            horizontalAlign: "right",
            verticalAlign: "bottom",
            type: "info",
          });
        } else {
          this.$notify({
            message: "Servicio no encontrado",
            icon: "ti-alert",
            horizontalAlign: "right",
            verticalAlign: "bottom",
            type: "warning",
          });
        }
      } else {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style>
</style>