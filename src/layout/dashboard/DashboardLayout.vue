<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
        <drop-down
          v-for="section in PermisosRoles"
          :key="section.name"
          v-if="getValidSection(section.permisos)"
          class="nav-item resposive-menu"
          :title="section.name"
          title-classes="nav-link"
          :icon="section.icon"
        >
          <a
            v-for="permiso in section.permisos"
            :key="permiso.id"
            :href="permiso.path"
            v-if="getValidPermises(permiso.id)"
            class="nav-link"
          >
            <i :class="permiso.icon"></i>
            <p>{{ permiso.name }}</p>
          </a>
        </drop-down>
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a href="#" class="nav-link resposive-menu">
            <i class="ti-panel"></i>
            <p>Dashboard</p>
          </a>
        </li>
        <drop-down
          v-for="section in PermisosRoles"
          :key="section.name"
          v-if="getValidSection(section.permisos)"
          class="nav-item"
          :title="section.name"
          title-classes="nav-link"
          :icon="section.icon"
        >
          <a
            v-for="permiso in section.permisos"
            :key="permiso.id"
            v-if="getValidPermises(permiso.id)"
            :href="permiso.path"
            class="nav-link"
          >
            <i :class="permiso.icon"></i>
            <p>{{ permiso.name }}</p>
          </a>
        </drop-down>

        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import { mapGetters } from "vuex";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  data: () => ({
    PermisosRoles: [
      {
        name: "Dispostivios",
        icon: "ti-printer",
        permisos: [
          {
            id: 9,
            name: "Agregar",
            path: "#/devices/add",
            icon: "ti-plus",
          },
          {
            id: 10,
            name: "Editar",
            path: "#/devices/edit",
            icon: "ti-pencil",
          },
        ],
      },
      {
        name: "Modelo dispositivo",
        icon: "ti-harddrives",
        permisos: [
          {
            id: 19,
            name: "Agregar",
            path: "#/model_devices/add",
            icon: "ti-plus",
          },
          {
            id: 21,
            name: "Editar",
            path: "#/devices/edit",
            icon: "ti-pencil",
          },
        ],
      },
      {
        name: "Servicios",
        icon: "ti-ticket",
        permisos: [
          {
            id: 15,
            name: "Agregar",
            path: "#/servicios/add",
            icon: "ti-plus",
          },
          {
            id: 16,
            name: "Editar",
            path: "#/servicios/add_seguimiento",
            icon: "ti-pencil",
          },
          {
            id: 17,
            name: "Funalizar",
            path: "#/servicios/close",
            icon: "ti-archive",
          },
        ],
      },
      {
        name: "Usuario",
        icon: "ti-user",
        permisos: [
          {
            id: 1,
            name: "Agregar",
            path: "#/users/add",
            icon: "ti-plus",
          },
          {
            id: 6,
            name: "Editar",
            path: "#/users/edit",
            icon: "ti-pencil",
          },
        ],
      },
      {
        name: "Empresas",
        icon: "ti-briefcase",
        permisos: [
          {
            id: 22,
            name: "Agregar",
            path: "#/empresas/add",
            icon: "ti-plus",
          },
          {
            id: 23,
            name: "Editar",
            path: "#/empresas/edit",
            icon: "ti-pencil",
          },
        ],
      },
    ],
  }),
  computed: {
    ...mapGetters("users", ["getValidPermises", "getValidSection"]),
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
