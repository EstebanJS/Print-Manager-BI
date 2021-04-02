<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Ingrese el número de documento del usuario"
          placeholder="Número de documento"
          v-model="NumDoc"
        >
        </fg-input>
      </div>
    </div>
    <div>
      <p-button type="info" round @click.native.prevent="EventButton">
        Buscar usuario
      </p-button>
    </div>
  </form>
</template>

<script>
import { validarCaracteres, validarSoloNumeros } from "@/lib/validation.js";
import { mapActions } from "vuex";

export default {
  data: () => ({
    NumDoc: "",
  }),
  methods: {
    ...mapActions("users", ["actSearchUser"]),
    async EventButton() {
      if (validarCaracteres(this.NumDoc) && validarSoloNumeros(this.NumDoc)) {
        const rest = await this.actSearchUser(this.NumDoc);
        if (Array.isArray(rest)) {
          if (rest.length > 0) {
            console.log("array");
            this.$emit("callback", rest[0]);
          } 
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
  }
};
</script>

<style>
</style>