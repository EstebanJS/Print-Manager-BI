<template>
  <card class="card" title="Agregar Servicio">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-4">
            <label for="exampleFormControlSelect1">Tecnico</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="servicio.id_Tecnico"
            >
              <option
                v-for="tecnico in getUsersForRoll"
                :key="tecnico.id_Usuario"
                :value="tecnico.id_Usuario"
              >
                {{ tecnico.nombres }}
              </option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="exampleFormControlSelect1">Dispositivo</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="servicio.id_Dispositivo"
            >
              <option
                v-for="dispositivo in getDispositivos"
                :key="dispositivo.id_Dispositivo"
                :value="dispositivo.id_Dispositivo"
              >
                {{ dispositivo.serial }}
              </option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="exampleFormControlSelect1">Tipo de servicio</label>
            <select
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
          <p-button type="info" round @click.native.prevent="EventButton">
            Agregar Servicio
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { evalObjetForm } from "@/lib/validation.js";

export default {
  data: () => ({
    servicio: {
      id_Tecnico: 1,
      id_Dispositivo: 1,
      id_Tipo_Servicio: 1,
      Fecha_Solicitud: "2021-03-14T00:00:00",
      Fecha_Cierre:"2020-04-05",
      id_Estado_Servicio: 1,
      id_Falla: 2,
      id_Usuario: 1,
    },
  }),
  computed: {
    ...mapGetters("users", ["getUsersForRoll"]),
    ...mapGetters("dispositivos", ["getDispositivos"]),
    ...mapGetters([
      "getTipoFallaSelect",
      "getTipoServicioSelect",
      "getEstadoServicioSelect",
    ]),
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
        const rest = await this.actCreateNewServices(this.servicio);
        if (rest) {
          this.successMessage(rest) 
        } else {
          errorMessage()
        }
      }
    },
    successMessage(id) {
      this.$notify({
        message: `Proceso de Creacion de servicio exitoso, Id de servicio:${id}`,
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
  },
  async created() {
    if (this.getUsersForRoll.length === 0) {
      await this.actUsersForRoll(2);
    }
    if (this.getDispositivos.length === 0) {
      await this.actGetDispositivos();
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