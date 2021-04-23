<template>
  <card class="card" title="Reporte dispositivo">
    <div class="row">
      <div class="col-md-6">
        <label for="filtrarPor">Filtrar por:</label>
        <select class="custom-select" id="filtrarPor" v-model="Columna_Filtro">
          <option selected :value="null">Ninguno</option>
          <option value="ciudad">Ciudad</option>
          <option value="estado_Servicio">Estado</option>
          <option value="empresa">Empresa</option>
          <option value="tipo_Servicio">Tipo Servicio</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="filtrarValor">Valor</label>
        <select
          class="custom-select"
          id="filtrarValor"
          :disabled="request.Columna_Filtro === null"
          v-model="Valor_Filtro"
        >
          <option selected :value="null">Ninguno</option>
          <option
            v-for="(item, index) in SelectValue"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="overflow">
      <TableDataVue :TableHeaders="head" :data="body" />
    </div>
  </card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TableDataVue from "../Servicios/TableData.vue";
export default {
  components: {
    TableDataVue,
  },
  data: () => ({
    request: {
      id_Usuario: undefined,
      id_Rol: undefined,
      id_Empresa: undefined,
      Columna_Filtro: null,
      Valor_Filtro: null,
    },
    Columna_Filtro: null,
    Valor_Filtro: null,
    head: [
      "N° Servicio",
      "Fecha Solicitud",
      "Fecha Finalizacion",
      "Dirección",
      "Ciudad",
      "Departamento",
      "Empresa",
      "Tel. Empresa",
      "Correo Empresa",
      "Modelo",
      "Serial",
      "Falla",
      "Tecnico",
      "Correo Tecnico",
      "Tip. Servicio",
      "Estado"
    ],
    body: [],
    SelectValue: [],
  }),
  computed: {
    ...mapGetters("servicios", ["getReporteServicios"]),
    ...mapGetters("users", ["getDataUser"]),
  },
  watch: {
    Columna_Filtro(val) {
      if (val === null) {
        this.body = [...this.getReporteServicios];
      }
      this.SelectValue = [];
      this.request.Columna_Filtro = val;
      this.switchColum(val);
    },
    Valor_Filtro(val) {
      this.request.Valor_Filtro = val;
      this.body = this.getReporteServicios.filter(
        (item) =>
          item[this.request.Columna_Filtro] === this.request.Valor_Filtro
      );
    },
  },
  methods: {
    ...mapActions("servicios", ["actReporteServicio"]),
    async switchColum(value) {
      switch (value) {
        case "ciudad":
          this.SelectValue = [
            ...new Set(this.getReporteServicios.map((item) => item.ciudad)),
          ];
          break;
        case "estado_Servicio":
          this.SelectValue = [
            ...new Set(this.getReporteServicios.map((item) => item.estado_Servicio)),
          ];

          break;
        case "empresa":
          this.SelectValue = [
            ...new Set(this.getReporteServicios.map((item) => item.empresa)),
          ];
          break;
        case "tipo_Servicio":
          this.SelectValue = [
            ...new Set(this.getReporteServicios.map((item) => item.tipo_Servicio)),
          ];
          break;
      }
    },
  },
  async created() {
    if (this.getDataUser) {
      this.request.id_Rol = this.getDataUser.id_Rol;
      this.request.id_Empresa = this.getDataUser.id_Empresa;
      this.request.id_Usuario = this.getDataUser.id_Usuario;
      if (this.getReporteServicios.length === 0) {
        await this.actReporteServicio(this.request);
      }
      this.body = [...this.getReporteServicios];
    }
  },
};
</script>

<style>
.overflow {
  overflow: auto;
}
</style>