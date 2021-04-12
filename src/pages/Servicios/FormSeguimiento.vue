<template>
  <div>
    <form @submit.prevent>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Tipo Seguimiento</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Descripción"
              v-model="seguimiento.Tipo_Seguimiento"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p-button type="info" round @click.native.prevent="EventButton">
          {{
            actionForm === "ADD" ? "Agregar Seguimiento" : "Finalizar Servicio"
          }}
        </p-button>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { evalObjetForm } from "@/lib/validation.js";

export default {
  props: {
    actionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    IdServicioProp: {
      type: Number,
      require: true,
    },
  },
  data: () => ({
    seguimiento: {
      id_Seguimiento_Servicio: 0,
      Tipo_Seguimiento: "",
      id_Servicio: 0,
      Fecha_Seguimiento: "2020-03-29",
    },
  }),
  watch: {
    IdServicioProp(newValue) {
      if (newValue) {
        this.seguimiento.id_Servicio = newValue;
      }
    },
  },
  methods: {
    ...mapActions("servicios", [
      "actCreateNewSeguimiento",
      "actFinalizarServicio",
    ]),
    async EventButton() {
      if (!evalObjetForm(this.seguimiento)) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        switch (this.actionForm) {
          case "ADD":
            if (await this.actCreateNewSeguimiento(this.seguimiento)) {
              this.successMessage();
            } else {
              this.errorMessage;
            }
            break;
          case "CLOSE":
            if (await this.actFinalizarServicio(this.seguimiento)) {
              this.successMessage();
            } else {
              this.errorMessage;
            }
            break;
        }

        this.seguimiento = {};
        this.$emit("callback");
      }
    },
    callBackClean() {
      this.$emit("callback");
    },
    successMessage() {
      this.$notify({
        message: `Proceso de creacion de seguimiento exitoso`,
        icon: "ti-check",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
      });
    },
    errorMessage() {
      this.$notify({
        message: `Proceso de creacion de seguimiento fallo`,
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
      });
    },
  },
  created() {
    if (this.IdServicioProp) {
      this.seguimiento.id_Servicio = this.IdServicioProp;
    }
  },
};
</script>

<style>
</style>