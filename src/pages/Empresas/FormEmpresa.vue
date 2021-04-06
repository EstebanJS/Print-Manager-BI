<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-12">
        <fg-input
          type="text"
          label="Nombre de la empresa"
          placeholder="Ingresa el nombre de la empresa"
          v-model="empresa.nombre_Empresa"
        >
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <fg-input
          v-if="ActionForm === 'ADD'"
          type="text"
          label="Número NIT o Cédula"
          placeholder="Ingrese número NIT o Cédula sin espacios ni caracteres"
          v-model="empresa.nit_Empresa"
        >
        </fg-input>
      </div>
    </div>

    <div class="text-center">
      <p-button type="info" round @click.native.prevent="EventButton">
        {{ ActionForm === "ADD" ? "Agregar Empresa" : "Actualizar Empresa" }}
      </p-button>
    </div>
    <div class="clearfix"></div>
  </form>
</template>

<script>
import { evalObjetForm, validarSoloNumeros } from "@/lib/validation.js";
import { mapActions } from "vuex";

export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataEmpresaProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    empresa: {},
    clearEmpresa: {
      nombre_Empresa: "",
      nit_Empresa: "",
    },
  }),
  watch: {
    DataEmpresaProps(newData) {
      this.empresa = { ...newData };
    },
  },
  methods: {
    ...mapActions("empresa", ["actCreateNewEmpresa", "actUpdateEmpresa"]),
    async EventButton() {
      if (
        !evalObjetForm(this.empresa) ||
        !validarSoloNumeros(this.empresa.nit_Empresa)
      ) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        switch (this.ActionForm) {
          case "ADD":
            if (await this.actCreateNewEmpresa(this.empresa)) {
              this.successMessage();
            } else {
              this.errorMessage();
            }
            break;
          case "EDIT":
            if (await this.actUpdateEmpresa(this.empresa)) {
              this.successMessage();
              this.$emit("callback");
            } else {
              this.errorMessage();
            }
            break;
          default:
            console.error("ERROR ACTION BUTTON IN FORM EMPRESA");
            break;
        }
      }
      this.empresa = { ...this.clearEmpresa };
    },
    successMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de empresa exitoso`,
        icon: "ti-check",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
      });
    },
    errorMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de empresa fallo`,
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
      });
    },
  },
  created() {
    if (this.DataEmpresaProps) {
      this.empresa = { ...this.DataEmpresaProps };
    } else {
      this.empresa = { ...this.clearEmpresa };
    }
  },
};
</script>

<style>
</style>