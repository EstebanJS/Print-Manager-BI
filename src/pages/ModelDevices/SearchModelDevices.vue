<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-12">
        <label for="exampleFormControlSelect1">Seleccione modelo de dispositivo</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="id_Modelo_Dispositivo"
        >
          <option
            v-for="toner in getModelosDispositivo"
            :key="toner.id_Modelo_Dispositivo"
            :value="toner.id_Modelo_Dispositivo"
          >
            {{ toner.nombre_Modelo }}
          </option>
        </select>
      </div>
    </div>
    <div>
      <p-button type="info" round @click.native.prevent="EventButton">
        Editar modelo
      </p-button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    id_Modelo_Dispositivo:""
  }),
  computed: {
    ...mapGetters("modeloDispositivo", ["getModelosDispositivo"]),
  },
  methods: {
    ...mapActions("modeloDispositivo", ["actGetModeloDispositivo"]),
    async EventButton() {
      let model = this.getModelosDispositivo.find( mod => mod.id_Modelo_Dispositivo === this.id_Modelo_Dispositivo)
      this.$emit("callback", model);
    },
  },
  async created() {
    if (this.getModelosDispositivo.length === 0) {
      await this.actGetModeloDispositivo();
    }
  },
};
</script>

<style>
</style>