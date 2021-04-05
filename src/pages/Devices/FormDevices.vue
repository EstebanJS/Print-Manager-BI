<template>
  <form @submit.prevent>
    <div class="d-flex flex-row-reverse">
      <div v-if="ActionForm === 'EDIT'" class="p-2">
        <strong>Ultima fecha de servicio: {{ formatDate(fecha_ultimo_servicio) }}</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <label for="exampleFormControlSelect1">Modelo</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="device.id_Modelo_Dispositivo"
        >
          <option
            v-for="Modelo in getModeloDispositivoSelect"
            :key="Modelo.id_Modelo_Dispositivo"
            :value="Modelo.id_Modelo_Dispositivo"
          >
            {{ Modelo.nombre_Modelo }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Serie"
          placeholder="Serie"
          v-model="device.serial"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1"
          >¿Es un equipo multifuncional?</label
        >
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="device.multifuncional"
        >
          <option :value="1">Si</option>
          <option :value="0">No</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="text"
          label="IP"
          placeholder="IP"
          v-model="device.direccion_IP"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <label for="exampleFormControlSelect1">Ciudad</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="device.id_Ciudad"
        >
          <option
            v-for="ciudad in getCiudadSelect"
            :key="ciudad.id_Ciudad"
            :value="ciudad.id_Ciudad"
          >
            {{ ciudad.nombre_Ciudad }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="text"
          label="Dirección"
          placeholder="Dirección"
          v-model="device.direccion"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input
          type="number"
          label="Contador de paginas"
          placeholder="Contador"
          v-model="device.contador"
        >
        </fg-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <label for="Empresa">Empresa</label>
        <select class="form-control" id="Empresa" v-model="device.id_Empresa">
          <option
            v-for="Empresa in getEmpresaSelect"
            :key="Empresa.id_Empresa"
            :value="Empresa.id_Empresa"
          >
            {{ Empresa.nombre_Empresa }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="exampleFormControlSelect1">Estado</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="device.id_Estado_Dispositivo"
        >
          <option
            v-for="estado in getEstadoDispositivoSelect"
            :key="estado.id_Estado_Dispositivo"
            :value="estado.id_Estado_Dispositivo"
          >
            {{ estado.nombre_Estado_Dispositivo }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <label for="Empresa">Toner</label>
        <select class="form-control" id="Empresa" v-model="checklist.toner">
          <option :value="true">Si</option>
          <option :value="false">No</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="Empresa">¿Cuenta con Memoria SD?</label>
        <select
          class="form-control"
          id="Empresa"
          v-model="checklist.memoria_SD"
        >
          <option :value="true">Si</option>
          <option :value="false">No</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="number"
          label="Capacidad de memoria"
          placeholder="Memoria MB"
          v-model="checklist.capacidad_Memoria"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input
          type="number"
          label="Vida util unidad de revelado"
          placeholder="ingrese cantidad de páginas"
          v-model="checklist.vida_Util_Unidad_Revelado"
        >
        </fg-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="number"
          label="Vida util unidad cilindro"
          placeholder="ingrese cantidad de páginas"
          v-model="checklist.vida_Util_Unidad_Cilindro"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input
          type="number"
          label="Vida util unidad fusora"
          placeholder="ingrese cantidad de páginas"
          v-model="checklist.vida_Util_Unidad_Fusora"
        >
        </fg-input>
      </div>
    </div>

    <div class="text-center">
      <p-button type="info" round @click.native.prevent="updateProfile">
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
import { evalObjetForm } from "@/lib/validation.js";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataDeviceProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    device: {},
    ClearDevice: {
      id_Modelo_Dispositivo: "",
      serial: "",
      multifuncional: "",
      direccion_IP: "",
      id_Ciudad: "",
      direccion: "",
      id_Empresa: "",
      id_Estado_Dispositivo: "",
      contador: "",
      fecha_Asignacion: "2021-04-01T14:05:57.78",
    },
    checklist: {},
    ClearChecklist: {
      toner: "",
      memoria_SD: "",
      capacidad_Memoria: "",
      vida_Util_Unidad_Revelado: "",
      vida_Util_Unidad_Cilindro: "",
      vida_Util_Unidad_Fusora: "",
      fecha_CheCkList: "2021-04-01T14:05:57.78",
    },
    fecha_ultimo_servicio: "",
  }),
  computed: {
    ...mapGetters([
      "getEmpresaSelect",
      "getCiudadSelect",
      "getModeloDispositivoSelect",
      "getEstadoDispositivoSelect",
    ]),
  },
  watch: {
    async DataDeviceProps(newValue) {
      this.device = { ...newValue.device };
      this.checklist = { ...newValue.checklist };
      this.fecha_ultimo_servicio = await this.actGetUltimaFechaServicio(
        this.device.id_Dispositivo
      );
    },
  },
  methods: {
    ...mapActions([
      "actLoadEmpresaSelect",
      "actLoadCiudadSelect",
      "actLoadModeloDispositivoSelect",
      "actLoadEstadoDispositivoSelect",
      "actGetUltimaFechaServicio",
    ]),
    ...mapActions("dispositivos", [
      "actCreateNewDevice",
      "actEditDevice",
      "actValidateSerial",
    ]),
    async updateProfile() {
      this.checklist.capacidad_Memoria = parseInt(
        this.checklist.capacidad_Memoria
      );
      this.checklist.vida_Util_Unidad_Revelado = parseInt(
        this.checklist.vida_Util_Unidad_Revelado
      );
      this.checklist.vida_Util_Unidad_Cilindro = parseInt(
        this.checklist.vida_Util_Unidad_Cilindro
      );
      this.checklist.vida_Util_Unidad_Fusora = parseInt(
        this.checklist.vida_Util_Unidad_Fusora
      );
      this.device.contador = parseInt(this.device.contador);
      if (!evalObjetForm(this.device) && !evalObjetForm(this.checklist)) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        if (await this.actValidateSerial(this.device.serial)) {
          switch (this.ActionForm) {
            case "ADD":
              if (
                await this.actCreateNewDevice({
                  device: this.device,
                  checklist: this.checklist,
                })
              ) {
                this.successMessage();
              } else {
                this.errorMessage();
              }
              break;
            case "EDIT":
              if (
                await this.actEditDevice({
                  device: this.device,
                  checklist: this.checklist,
                })
              ) {
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
        } else {
          this.$notify({
            message: "Dispositivo con ese serial ya fue registrado",
            icon: "ti-alert",
            horizontalAlign: "right",
            verticalAlign: "bottom",
            type: "warning",
          });
        }

        this.device = {};
        this.checklist = {};
        this.device = { ...this.ClearDevice };
        this.checklist = { ...this.ClearChecklist };
      }
    },
    successMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de dispotivo exitos`,
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
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
  async created() {
    if (this.DataDeviceProps) {
      this.device = { ...this.DataDeviceProps.device };
      this.checklist = { ...this.DataDeviceProps.checklist };
      this.fecha_ultimo_servicio = await this.actGetUltimaFechaServicio(
        this.device.id_Dispositivo
      );
      console.log(this.fecha_ultimo_servicio);
    } else {
      this.device = { ...this.ClearDevice };
      this.checklist = { ...this.ClearChecklist };
    }
    if (this.getModeloDispositivoSelect.length === 0) {
      await this.actLoadModeloDispositivoSelect();
    }
    if (this.getCiudadSelect.length === 0) {
      await this.actLoadCiudadSelect();
    }
    if (this.getEstadoDispositivoSelect.length === 0) {
      await this.actLoadEstadoDispositivoSelect();
    }
    if (this.getEmpresaSelect.length === 0) {
      await this.actLoadEmpresaSelect();
    }
  },
};
</script>

<style>
</style>