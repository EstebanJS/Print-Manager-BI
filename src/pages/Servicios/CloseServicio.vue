<template>
  <card class="card" title="Finalizar Servicio">
    <div>
      <SearchServicioVue v-on:callback="callBackSearchServicio" />
    </div>
    <div>
      <CardServicioVue v-if="InfoServicio" :DataServiceProps="InfoServicio" />
    </div>
    <div>
      <TableDataVue
        v-if="InfoServicio"
        :TableHeaders="headers"
        :data="body"
        title="Seguimiento del servicio"
      />
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
import NotificationTemplate from '../Notifications/NotificationTemplate';
import TableDataVue from "./TableData.vue";
import FormSeguimientoVue from "./FormSeguimiento.vue";
import SearchServicioVue from "./SearchServicio.vue";
import { mapActions } from "vuex";
import { formatDate } from "@/lib/until";
import CardServicioVue from "./CardServicio.vue";
export default {
  components: {
    SearchServicioVue,
    CardServicioVue,
    FormSeguimientoVue,
    TableDataVue,
  },
  data: () => ({
    InfoServicio: undefined,
    headers: ["Asignado a", "Correo", "Estado", "Seguimiento", "Fecha"],
    body: [],
  }),
  watch: {
    async InfoServicio(newValue) {
      if (newValue) {
        let aux = await this.actListarSeguimientoServicio(newValue.id_Servicio);
        this.body = aux.map((item) => {
          item.fecha_Seguimiento = formatDate(item.fecha_Seguimiento);
          return item;
        });
      }
    },
  },
  methods: {
    ...mapActions("servicios", ["actListarSeguimientoServicio"]),
    callBackSearchServicio(data) {
      if (typeof data === "object" && data.estado_Servicio === "En Proceso") {
        this.InfoServicio = data;
      } else {
        this.$notify({
          message: "Servicio no se encuntra en proceso",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "danger",
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