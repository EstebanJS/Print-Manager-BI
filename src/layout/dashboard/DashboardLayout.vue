<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link
          to="/dashboard"
          name="Dashboard"
          icon="ti-panel"
          v-if="getValidPermises(24)"
        />
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
        <drop-down
          class="nav-item"
          title="Opciones"
          title-classes="nav-link"
          icon="ti-settings"
        >
          <a href="#" class="nav-link">
            <i class="ti-info"></i>
            <p>Acerca de</p>
          </a>
          <a href="#/perfil" class="nav-link">
            <i class="ti-id-badge"></i>
            <p>Perfil</p>
          </a>
          <a class="nav-link" @click="LogOut">
            <i class="ti-unlock"></i>
            <p>Salir</p>
          </a>
        </drop-down>
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
import { mapGetters, mapActions } from "vuex";
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
            name: "Seguimiento",
            path: "#/servicios/add_seguimiento",
            icon: "ti-pencil",
          },
          {
            id: 17,
            name: "Finalizar",
            path: "#/servicios/close",
            icon: "ti-archive",
          },
        ],
      },
      {
        name: "Usuarios",
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
    ...mapActions("users", ["actLogout"]),
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    LogOut() {
      if (this.actLogout()) {
        this.$notify({
          message: "hasta la proxima",
          icon: "ti-check",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
        });
        this.$router.push({ path: "/login" });
      } else {
        this.$notify({
          message: "Error de logout",
          icon: "ti-na",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "danger",
        });
      }
    },
  },
  created() {},
};
</script>
