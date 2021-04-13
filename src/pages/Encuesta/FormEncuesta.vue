<template>
  <form @submit.prevent class="px-5 py-5">
    <div class="row">
      <div class="col-md-12">
        <label>Nivel de Satisfacción con el Equipo</label>
        <br />
        <div class="d-flex justify-content-around">
          <div v-for="i in 5" :key="i" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptionsEquipo"
              :id="`inlineRadioEquipo${i}`"
              :value="i"
              v-model="encuesta.Satisfaccion_Servicio_Equipo"
            />
            <label class="form-check-label" :for="`inlineRadioEquipo${i}`">{{
              i
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <label>Nivel de satisfaccion del trato con el cliente</label>
        <br />
        <div class="d-flex justify-content-around">
          <div v-for="i in 5" :key="i" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptionsCliente"
              :id="`inlineRadioCliente${i}`"
              :value="i"
              v-model="encuesta.Satisfaccion_Trato_Cliente"
            />
            <label class="form-check-label" :for="`inlineRadioCliente${i}`">{{
              i
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <label>Nivel de presentacion personal del tecnico</label>
        <br />
        <div class="d-flex justify-content-around">
          <div v-for="i in 5" :key="i" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptionsPersonal"
              :id="`inlineRadioPersonal${i}`"
              :value="i"
              v-model="encuesta.Presentacion_Personal_Tecnico"
            />
            <label class="form-check-label" :for="`inlineRadioPersonal${i}`">{{
              i
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="d-flex justify-content-center">
      <p-button type="info" round @click.native.prevent="EventButton">
        Finalizar Encuesta
      </p-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {},
  data: () => ({
    encuesta: {
      Satisfaccion_Servicio_Equipo: 5,
      Satisfaccion_Trato_Cliente: 5,
      Presentacion_Personal_Tecnico: 5,
      Fecha_Encuesta: "2020-03-29",
      URL_Encuesta:
        "133775cb7bb469669d1f8766dc4a36ad5ea6871dfd498755b524ed6d4892b62e",
    },
  }),
  methods: {
    ...mapActions(["actSendEncuesta"]),
    async EventButton() {
      if (await this.actSendEncuesta(this.encuesta)) {
        this.successMessage();
        this.$router.push('login')
      } else {
        this.errorMessage();
      }
    },
    successMessage() {
      this.$notify({
        message: `Gracias por sus respuestas`,
        icon: "ti-check",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
      });
    },
    errorMessage() {
      this.$notify({
        message: `Error al realizar la encuesta`,
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
      });
    },
  },
  created() {
    this.encuesta.URL_Encuesta = this.$route.params.id;
  },
};
</script>

<style>
</style>