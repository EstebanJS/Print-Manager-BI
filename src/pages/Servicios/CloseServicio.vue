<template>
  <card class="card" title="Finalizar Servicio">
    <div>
      <SearchServicioVue v-on:callback="callBackSearchServicio" />
    </div>
    <div>
      <FormServicioVue
        v-if="InfoServicio"
        ActionForm="EDIT"
        :DataServiceProps="InfoServicio"
      />
    </div>
    <div>
      <TableDataVue v-if="InfoServicio" :TableHeaders="headers" :data="body" title="Seguimiento del servicio"/>
    </div>
    <div>
      <FormSeguimientoVue
        actionForm="CLOSE"
        v-if="InfoServicio"
        :IdServicioProp="InfoServicio.id_Servicio"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>

<script>
import TableDataVue from "./TableData.vue";
import FormSeguimientoVue from "./FormSeguimiento.vue";
import FormServicioVue from "./FormServicio.vue";
import SearchServicioVue from "./SearchServicio.vue";
import { mapActions } from "vuex";
import {formatDate} from '@/lib/until'
export default {
  components: {
    SearchServicioVue,
    FormServicioVue,
    FormSeguimientoVue,
    TableDataVue,
  },
  data: () => ({
    InfoServicio: undefined,
    headers: ["Actualizado por", "Correo","Estado","Seguimiento","Fecha"],
    body: [],
  }),
  watch: {
    async InfoServicio(newValue) {
      if (newValue) {
        let aux = await this.actListarSeguimientoServicio(newValue.id_Servicio)
        this.body = aux.map(item => {
          item.fecha_Seguimiento = formatDate(item.fecha_Seguimiento)
          return item
        })
      }
    },
  },
  methods: {
    ...mapActions("servicios", ["actListarSeguimientoServicio"]),
    callBackSearchServicio(data) {
      if (typeof data === "object") {
        this.InfoServicio = data;
      } else {
        this.$notify({
          message: "Servicio no encontrado",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "error",
        });
      }
    },
    callBackClean() {
      this.InfoServicio = undefined;
    },
  },
};
</script>

<style>
</style>