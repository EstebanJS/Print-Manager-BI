<template>
  <form @submit.prevent>
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
      <p-button type="info" round @click.native.prevent="EventButton">
        Buscar servicio
      </p-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { validarCaracteres, validarSoloNumeros } from "@/lib/validation.js";
export default {
  data: () => ({
    servicio: undefined,
  }),
  methods: {
    ...mapActions('servicios',["actSearchService"]),
    async EventButton() {
      if (
        this.servicio !== "" &&
        validarCaracteres(this.servicio) &&
        validarSoloNumeros(this.servicio)
      ) {
        const data = await this.actSearchService(this.servicio);
        if (data) {
          this.$emit("callback", data);
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