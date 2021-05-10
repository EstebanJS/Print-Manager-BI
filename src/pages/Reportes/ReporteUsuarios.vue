<template>
  <card class="card" title="Reporte usuarios">
    <div class="row">
      <div class="col-md-6">
        <label for="filtrarPor">Filtrar:</label>
        <select class="custom-select" id="filtrarPor" v-model="Columna_Filtro">
          <option selected :value="null">Ninguno</option>
          <option value="rol">Rol</option>
          <option value="ciudad">Ciudad</option>
          <option value="activo">Estado</option>
          <option value="empresa">Empresa</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="filtrarValor">{{
          Columna_Filtro ? `${capitalize}:` : " Por :"
        }}</label>
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
            <span v-if="typeof item === 'boolean'">{{
              item ? "Activo" : "Inactivo"
            }}</span>
            <span v-else> {{ item }}</span>
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
      "Nombre",
      "N° Documento",
      "Correo",
      "Dirección",
      "Telefono",
      "Rol",
      "Ciudad",
      "Empresa",
      "Activo",
    ],
    body: [],
    SelectValue: [],
  }),
  computed: {
    ...mapGetters("users", ["getDataUser", "getReporteUsuarios"]),
    capitalize() {
      if (typeof this.Columna_Filtro !== "string") return "";
      return (
        this.Columna_Filtro.charAt(0).toUpperCase() +
        this.Columna_Filtro.slice(1)
      );
    },
  },
  watch: {
    Columna_Filtro(val) {
      if (val === null) {
        this.body = [...this.getReporteUsuarios];
      }
      this.SelectValue = [];
      this.request.Columna_Filtro = val;
      this.switchColum(val);
    },
    Valor_Filtro(val) {
      this.request.Valor_Filtro = val;
      this.body = this.getReporteUsuarios.filter(
        (item) =>
          item[this.request.Columna_Filtro] === this.request.Valor_Filtro
      );
    },
  },
  methods: {
    ...mapActions("users", ["actReporte"]),
    async switchColum(value) {
      switch (value) {
        case "ciudad":
          this.SelectValue = [
            ...new Set(this.getReporteUsuarios.map((item) => item.ciudad)),
          ];
          break;
        case "activo":
          this.SelectValue = [
            ...new Set(this.getReporteUsuarios.map((item) => item.activo)),
          ];

          break;
        case "empresa":
          this.SelectValue = [
            ...new Set(this.getReporteUsuarios.map((item) => item.empresa)),
          ];
          break;
        case "rol":
          this.SelectValue = [
            ...new Set(this.getReporteUsuarios.map((item) => item.rol)),
          ];
          break;
      }
    },
  },
  async created() {
    if (this.getDataUser) {
      this.request.id_Rol = this.getDataUser.id_Rol;
      this.request.id_Empresa = this.getDataUser.id_Empresa;
      if (this.getReporteUsuarios.length === 0) {
        await this.actReporte(this.request);
      }
      this.body = [...this.getReporteUsuarios];
    }
  },
};
</script>

<style>
.overflow {
  overflow: auto;
}
</style>