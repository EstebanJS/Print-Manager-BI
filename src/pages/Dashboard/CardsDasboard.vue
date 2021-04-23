<template>
  <div class="row">
    <div
      class="col-md-6 col-xl-3"
      v-for="stats in statsCards"
      :key="stats.title"
    >
      <stats-card>
        <div
          class="icon-big text-center"
          :class="`icon-${stats.type}`"
          slot="header"
        >
          <i :class="stats.icon"></i>
        </div>
        <div class="numbers" slot="content">
          <p>{{ stats.title }}</p>
          {{ stats.value }}
        </div>
        <!-- <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div> -->
      </stats-card>
    </div>
  </div>
</template>

<script>
import { StatsCard } from "@/components/index";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    StatsCard,
  },
  data: () => ({
    statsCards: [],
  }),
  computed: {
    ...mapGetters("users", ["getDataUser"]),
    ...mapGetters("dispositivos", ["getReporteDispostivos"]),
    ...mapGetters("servicios", ["getReporteServicios"]),
  },
  methods: {
    ...mapActions("dispositivos", ["actReporteDispositivo"]),
    ...mapActions("servicios", ["actReporteServicio"]),
    validCardRol() {
      const card = {
        type: "info",
        icon: "ti-user",
        title: "Rol",
        value:
          this.getDataUser.rol.length < 8
            ? this.getDataUser.rol
            : this.getDataUser.rol.substring(0, 5) + "...",
        footerText: "Updated now",
        footerIcon: "ti-reload",
      };
      this.statsCards.push(card);
    },
    async validCardDispositivos() {
      const request = {
        id_Rol: undefined,
        id_Empresa: undefined,
        Columna_Filtro: null,
        Valor_Filtro: null,
      };
      request.id_Rol = this.getDataUser.id_Rol;
      request.id_Empresa = this.getDataUser.id_Empresa;
      if (this.getReporteDispostivos.length === 0) {
        await this.actReporteDispositivo(request);
      }
      const card = {
        type: "warning",
        icon: "ti-printer",
        title: "Dispositivos",
        value: this.getReporteDispostivos.length,
        footerText: "Updated now",
        footerIcon: "ti-reload",
      };
      this.statsCards.push(card);
    },
    async validCardServicios() {
      const request = {
        id_Usuario: undefined,
        id_Rol: undefined,
        id_Empresa: undefined,
        Columna_Filtro: null,
        Valor_Filtro: null,
      };
      request.id_Rol = this.getDataUser.id_Rol;
      request.id_Empresa = this.getDataUser.id_Empresa;
      request.id_Usuario = this.getDataUser.id_Usuario;

      if (this.getReporteServicios.length === 0) {
        await this.actReporteServicio(request);
      }

      const stats = [
        {
          type: "success",
          icon: "ti-ticket",
          title: "Servicios",
          value: this.getReporteServicios.length,
          footerText: "Last day",
          footerIcon: "ti-calendar",
        },
        //estado_Servicio:"Abierto"
        {
          type: "danger",
          icon: "ti-bookmark",
          title: "Servicios abiertos",
          value: this.getReporteServicios.filter(
            (item) => item.estado_Servicio === "Abierto"
          ).length,
          footerText: "In the last hour",
          footerIcon: "ti-timer",
        },
      ];

      this.statsCards.push(...stats);
    },
  },
  created() {
    this.validCardDispositivos();
    this.validCardServicios();
    this.validCardRol();
  },
};
</script>

<style>
</style>