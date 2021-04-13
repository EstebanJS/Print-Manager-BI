<template>
  <card class="card" title="Reporte dispositivo">
    <div class="row">
      <div class="col-md-6">
        <label for="filtrarPor">Filtrar por:</label>
        <select class="custom-select" id="filtrarPor" v-model="Columna_Filtro">
          <option selected :value="null">Ninguno</option>
          <option value="ciudad">Ciudad</option>
          <option value="estado">Estado</option>
          <option value="empresa">Empresa</option>
          <option value="modelo">Modelo</option>
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
      id_Rol: undefined,
      id_Empresa: undefined,
      Columna_Filtro: null,
      Valor_Filtro: null,
    },
    Columna_Filtro: null,
    Valor_Filtro: null,
    head: [
      "Marca",
      "Modelo",
      "Serial",
      "Toner",
      "Empresa",
      "Ciudad",
      "Departamento",
      "Dirección",
      "Estado",
      "PagXmin",
      "Color",
      "Multifuncional",
    ],
    body: [],
    SelectValue: [],
  }),
  computed: {
    ...mapGetters("dispositivos", ["getReporteDispostivos"]),
    ...mapGetters("users", ["getDataUser"]),
  },
  watch: {
    Columna_Filtro(val) {
      if (val === null) {
        this.body = [...this.getReporteDispostivos];
      }
      this.SelectValue = [];
      this.request.Columna_Filtro = val;
      this.switchColum(val);
    },
    Valor_Filtro(val) {
      this.request.Valor_Filtro = val;
      this.body = this.getReporteDispostivos.filter(
        (item) =>
          item[this.request.Columna_Filtro] === this.request.Valor_Filtro
      );
    },
  },
  methods: {
    ...mapActions("dispositivos", ["actReporte"]),
    async switchColum(value) {
      switch (value) {
        case "ciudad":
          this.SelectValue = [
            ...new Set(this.getReporteDispostivos.map((item) => item.ciudad)),
          ];
          break;
        case "estado":
          this.SelectValue = [
            ...new Set(this.getReporteDispostivos.map((item) => item.estado)),
          ];

          break;
        case "empresa":
          this.SelectValue = [
            ...new Set(this.getReporteDispostivos.map((item) => item.empresa)),
          ];
          break;
        case "modelo":
          this.SelectValue = [
            ...new Set(this.getReporteDispostivos.map((item) => item.modelo)),
          ];
          break;
      }
    },
  },
  async created() {
    if (this.getDataUser) {
      this.request.id_Rol = this.getDataUser.id_Rol;
      this.request.id_Empresa = this.getDataUser.id_Empresa;
      if (this.getReporteDispostivos.length === 0) {
        await this.actReporte(this.request);
      }
      this.body = [...this.getReporteDispostivos];
    }
  },
};
</script>

<style>
.overflow {
  overflow: auto;
}
</style>