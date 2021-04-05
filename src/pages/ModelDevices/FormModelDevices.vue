<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Nombre del modelo"
          placeholder="Ingresa el nombre del modelo"
          v-model="model.nombre_Modelo"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Marca del modelo"
          placeholder="Ingresa la marca del modelo"
          v-model="model.marca"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <fg-input
          type="number"
          label="Paginas por minuto"
          placeholder="Ingresa el nombre del modelo"
          v-model="model.paginasXMinuto"
        >
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">¿Color?</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="model.color"
        >
          <option :value="1">Si</option>
          <option :value="0">No</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">¿Wifi?</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="model.wi_Fi"
        >
          <option :value="1">Si</option>
          <option :value="0">No</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">Toner</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="model.id_Toner"
        >
          <option
            v-for="toner in getTonerSelected"
            :key="toner.id_Toner"
            :value="toner.id_Toner"
          >
            {{ toner.modelo_Toner }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="text"
          label="Ruta manual de usuario"
          placeholder="Ingresa la ruta manual de usuario"
          v-model="model.ruta_Manual_Usuario"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input
          type="text"
          label="Ruta de la imagen"
          placeholder="Ingresa la ruta de la imagen"
          v-model="model.ruta_Imagen"
        >
        </fg-input>
      </div>
    </div>
    <div class="text-center">
      <p-button type="info" round @click.native.prevent="EventButton">
        {{
          ActionForm === "ADD"
            ? "Agregar Dispositivo"
            : "Actualizar Dispositivo"
        }}
      </p-button>
    </div>
    <div class="clearfix"></div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { evalObjetForm } from "@/lib/validation.js";
export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataModelProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    model: {},
    ClearModel: {
      nombre_Modelo: "",
      marca: "",
      paginasXMinuto: "",
      color: "",
      ruta_Manual_Usuario: "",
      wi_Fi: "",
      ruta_Imagen: "",
      id_Toner: "",
    },
  }),
  computed: {
    ...mapGetters(["getTonerSelected"]),
  },
  watch: {
    DataModelProps(newValue) {
      this.model = { ...newValue };
    },
  },
  methods: {
    ...mapActions(["actLoadTonerSelected"]),
    ...mapActions("modeloDispositivo", [
      "actCreateNewModeloDispositivo",
      "actUpdateModeloDispositivo",
    ]),
    async EventButton() {
      if (!evalObjetForm(this.model)) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        this.model.paginasXMinuto = parseInt(this.model.paginasXMinuto);
        switch (this.ActionForm) {
          case "ADD":
            if (await this.actCreateNewModeloDispositivo(this.model)) {
              this.successMessage();
            } else {
              this.errorMessage();
            }
            break;
          case "EDIT":
            if (await this.actUpdateModeloDispositivo(this.model)) {
              this.successMessage();
              this.$emit("callback");
            } else {
              this.errorMessage();
            }
            break;
          default:
            console.error("ERROR ACTION BUTTON IN FORM DEVICE");
            break;
        }
        this.model = {};
      }
    },
    successMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de modelo exitos`,
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
        } de dispositivo fallo`,
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
      });
    },
  },
  async created() {
    if (this.DataModelProps) {
      this.model = { ...this.DataModelProps };
    } else {
      this.model = { ...this.ClearModel };
    }
    if (this.getTonerSelected.length === 0) {
      await this.actLoadTonerSelected();
    }
  },
};
</script>

<style>
</style>