<template>
  <form @submit.prevent>
    <div class="d-flex flex-row-reverse">
      <div v-if="ActionForm === 'EDIT'" class="p-2">
        <strong>
          Fecha de solicitud: {{ formatDate(servicio.fecha_Solicitud) }}</strong
        >
      </div>
      <!-- <div v-if="ActionForm === 'EDIT'" class="p-2">
        <strong
          >Ultima fecha de servicio:
          {{ formatDate(fecha_ultimo_servicio) }}</strong
        >
      </div> -->
    </div>
    <div class="row">
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">Dispositivo</label>
        <select
          :disabled="ActionForm === 'EDIT'"
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="id_Dispositivo"
        >
          <option
            v-for="dispositivo in getDispositivos"
            :key="dispositivo.id_Dispositivo"
            :value="dispositivo.id_Dispositivo"
          >
            {{ dispositivo.serie }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">Tecnico</label>
        <select
          v-if="Tecnicos.length > 0"
          :disabled="ActionForm === 'EDIT'"
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="servicio.id_Tecnico"
        >
          <option
            v-for="tecnico in Tecnicos"
            :key="tecnico.id_Usuario"
            :value="tecnico.id_Usuario"
          >
            {{ tecnico.nombres }}
          </option>
        </select>
        <p v-else>No se encontro tenico disponible</p>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">Tipo de servicio</label>
        <select
          :disabled="ActionForm === 'EDIT'"
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="servicio.id_Tipo_Servicio"
        >
          <option
            v-for="servi in getTipoServicioSelect"
            :key="servi.id_Tipo_Servicio"
            :value="servi.id_Tipo_Servicio"
          >
            {{ servi.nombre_Tipo_Servicio }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label for="exampleFormControlSelect1">Estado</label>
        <select
          disabled
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="servicio.id_Estado_Servicio"
        >
          <option
            v-for="estado in getEstadoServicioSelect"
            :key="estado.id_Estado_Servicio"
            :value="estado.id_Estado_Servicio"
          >
            {{ estado.nombre_Estado_Servicio }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="exampleFormControlSelect1">Falla</label>
        <select
          :disabled="ActionForm === 'EDIT'"
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="servicio.id_Falla"
        >
          <option
            v-for="falla in getTipoFallaSelect"
            :key="falla.id_Falla"
            :value="falla.id_Falla"
          >
            {{ falla.nombre_Falla }}
          </option>
        </select>
      </div>
    </div>
    <div class="text-center">
      <p-button
        v-if="ActionForm === 'ADD'"
        type="info"
        round
        @click.native.prevent="EventButton"
      >
        Agregar Servicio
      </p-button>
    </div>
    <div class="clearfix"></div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { evalObjetForm } from "@/lib/validation.js";
import { sha256 } from "@/lib/bcrypt.js";
export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataServiceProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    servicio: {},
    CleanServicio: {
      id_Tecnico: "",
      id_Dispositivo: "",
      id_Tipo_Servicio: "",
      Fecha_Solicitud: "2021-03-14T00:00:00",
      Fecha_Cierre: "2020-04-05",
      id_Estado_Servicio: 1,
      id_Falla: "",
      id_Usuario: 1,
    },
    id_Dispositivo: "",
    Tecnicos: [],
  }),
  computed: {
    ...mapGetters("dispositivos", ["getDispositivos", "getDispositivo"]),
    ...mapGetters("users", ["getDataUser"]),
    ...mapGetters([
      "getTipoFallaSelect",
      "getTipoServicioSelect",
      "getEstadoServicioSelect",
    ]),
    ...mapGetters("users", ["getDataUser"]),
  },
  watch: {
    DataServiceProps(newValue) {
      if (newValue) {
        this.servicio = { ...newValue };
      }
    },
    async id_Dispositivo(val) {
      this.servicio.id_Dispositivo = val;
      this.Tecnicos = [];
      if (val !== "") {
        let dispo = this.getDispositivo(val);
        if (dispo.id_Ciudad !== "") {
          this.Tecnicos = await this.actUsersForRoll({
            id_Rol: 2,
            id_Ciudad: dispo.id_Ciudad,
          });
        }
      }
    },
  },
  methods: {
    ...mapActions("users", ["actUsersForRoll"]),
    ...mapActions("dispositivos", ["actGetDispositivos"]),
    ...mapActions("servicios", ["actCreateNewServices"]),
    ...mapActions([
      "actLoadTipoFallaSelect",
      "actLoadTipoServicioSelect",
      "actLoadEstadoServicioSelect",
    ]),
    async EventButton() {
      if (!evalObjetForm(this.servicio)) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        this.servicio.URL_Encuesta = sha256(JSON.stringify(this.servicio));
        const rest = await this.actCreateNewServices(this.servicio);
        if (rest) {
          this.successMessage(rest);
        } else {
          errorMessage();
        }
      }
      this.servicio = { ...this.CleanServicio };
    },
    successMessage(id) {
      this.$notify({
        message: `Proceso de Creacion de servicio exitoso, Número de servicio:${id}`,
        icon: "ti-check",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
      });
    },
    errorMessage() {
      this.$notify({
        message: "Proceso de Creacion de servicio fallo",
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
      });
    },
    formatDate(date) {
      if (date) {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      }
      return "No se registra";
    },
  },
  async created() {
    if (this.DataServiceProps) {
      this.servicio = { ...this.DataServiceProps };
    } else {
      this.servicio = { ...this.CleanServicio };
      if (this.getDataUser) {
        this.servicio.id_Usuario = this.getDataUser.id_Usuario;
      }
    }
    if (this.getDispositivos.length === 0) {
      await this.actGetDispositivos({
        id_Rol: this.getDataUser.id_Rol,
        id_Empresa: this.getDataUser.id_Empresa,
        Columna_Filtro: "estado",
        Valor_Filtro: "Activo",
      });
    }
    if (this.getTipoFallaSelect.length === 0) {
      await this.actLoadTipoFallaSelect();
    }
    if (this.getTipoServicioSelect.length === 0) {
      await this.actLoadTipoServicioSelect();
    }
    if (this.getEstadoServicioSelect.length === 0) {
      await this.actLoadEstadoServicioSelect();
    }
  },
};
</script>

<style>
</style>