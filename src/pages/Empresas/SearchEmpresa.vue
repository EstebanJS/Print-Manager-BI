<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-12">
        <fg-input
          type="text"
          label="Número NIT o Cédula"
          placeholder="Ingrese número NIT o Cédula sin espacios ni caracteres"
          v-model="nit"
        >
        </fg-input>
      </div>
    </div>
    <div>
      <p-button type="info" round @click.native.prevent="EventButton">
        Buscar empresa
      </p-button>
    </div>
  </form>
</template>

<script>
import { validarCaracteres, validarSoloNumeros } from "@/lib/validation.js";
import { mapActions } from "vuex";
export default {
  data: () => ({
    nit: undefined,
  }),
  methods: {
    ...mapActions("empresa", ["actSearchEmpresa"]),
    async EventButton() {
      if (
        this.nit !== "" &&
        validarCaracteres(this.nit) &&
        validarSoloNumeros(this.nit)
      ) {
        const data = await this.actSearchEmpresa(this.nit);
        if (data) {
          this.$emit("callback", data);
        } else {
          this.$notify({
            message: "Dispositivo no encontrado",
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