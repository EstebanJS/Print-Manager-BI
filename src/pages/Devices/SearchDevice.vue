<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Ingrese el serial del dispositivo"
          placeholder="Serial"
          v-model="serial"
        >
        </fg-input>
      </div>
    </div>
    <div>
      <p-button type="info" round @click.native.prevent="EventButton">
        Buscar dispositivo
      </p-button>
    </div>
  </form>
</template>

<script>
import { validarCaracteres, validarSoloNumeros } from "@/lib/validation.js";
import { mapActions } from "vuex";

export default {
  data: () => ({
    serial: undefined,
  }),
  methods: {
    ...mapActions("dispositivos", ["actSearchDivice"]),
    async EventButton() {
      if (
        this.serial !== "" ||
        this.serial !== undefined ||
        validarCaracteres(this.serial)
      ) {
        const { status, data } = await this.actSearchDivice(this.serial);
        if (status) {
          data.device.fecha_Asignacion = this.fixDate(data.device.fecha_Asignacion);
          data.device.fecha_Ultimo_Servicio = this.fixDate(data.device.fecha_Ultimo_Servicio);
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
    fixDate(date) {
      let auxDate = date.split("T");
      return auxDate[0];
    },
  },
};
</script>

<style>
</style>