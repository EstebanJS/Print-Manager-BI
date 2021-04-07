<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
        <drop-down
          class="nav-item resposive-menu"
          title="Dispositivos"
          title-classes="nav-link"
          icon="ti-printer"
        >
          <a href="#/devices/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/devices/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
        </drop-down>

        <drop-down
          class="nav-item resposive-menu"
          title="Modelo Dispositivos"
          title-classes="nav-link"
          icon="ti-harddrives"
        >
          <a href="#/model_devices/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/model_devices/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
        </drop-down>

        <drop-down
          class="nav-item resposive-menu"
          title="Servicios"
          title-classes="nav-link"
          icon="ti-ticket"
        >
          <a href="#/servicios/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/servicios/add_seguimiento" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Seguimiento</p>
          </a>
          <a href="#/servicios/close" class="nav-link">
            <i class="ti-archive"></i>
            <p>Finalizar</p>
          </a>
        </drop-down>

        <drop-down
          class="nav-item resposive-menu"
          title="Usuarios"
          title-classes="nav-link"
          icon="ti-user"
        >
          <a href="#/users/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/users/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
          <!-- <a href="#" class="nav-link">
            <i class="ti-na"></i>
            <p>Deshabilitar</p>
          </a>
          <a href="#" class="nav-link">
            <i class="ti-check"></i>
            <p>Habilitar</p>
          </a> -->
        </drop-down>

        <drop-down
          class="nav-item resposive-menu"
          title="Empresas"
          title-classes="nav-link"
          icon="ti-briefcase"
        >
          <a href="#/empresas/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/empresas/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
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
          class="nav-item"
          title="Dispositivos"
          title-classes="nav-link"
          icon="ti-printer"
        >
          <a href="#/devices/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/devices/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
        </drop-down>
        <drop-down
          class="nav-item"
          title="Modelo Dispositivos"
          title-classes="nav-link"
          icon="ti-harddrives"
        >
          <a href="#/model_devices/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/model_devices/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
        </drop-down>
        <drop-down
          class="nav-item"
          title="Servicios"
          title-classes="nav-link"
          icon="ti-ticket"
        >
          <a href="#/servicios/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/servicios/add_seguimiento" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Seguimiento</p>
          </a>
          <a href="#/servicios/close" class="nav-link">
            <i class="ti-archive"></i>
            <p>Finalizar</p>
          </a>
        </drop-down>
        <drop-down
          class="nav-item"
          title="Usuarios"
          title-classes="nav-link"
          icon="ti-user"
        >
          <a href="#/users/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/users/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
          <!-- <a href="#" class="nav-link">
            <i class="ti-na"></i>
            <p>Deshabilitar</p>
          </a>
          <a href="#" class="nav-link">
            <i class="ti-check"></i>
            <p>Habilitar</p>
          </a> -->
        </drop-down>
        <drop-down
          class="nav-item"
          title="Empresas"
          title-classes="nav-link"
          icon="ti-briefcase"
        >
          <a href="#/empresas/add" class="nav-link">
            <i class="ti-plus"></i>
            <p>Agregar</p>
          </a>
          <a href="#/empresas/edit" class="nav-link">
            <i class="ti-pencil"></i>
            <p>Editar</p>
          </a>
          <!-- <a href="#" class="nav-link">
            <i class="ti-na"></i>
            <p>Deshabilitar</p>
          </a>
          <a href="#" class="nav-link">
            <i class="ti-check"></i>
            <p>Habilitar</p>
          </a> -->
        </drop-down>
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
          <a href="#" class="nav-link">
            <i class="ti-id-badge"></i>
            <p>Perfil</p>
          </a>
          <a href="#" class="nav-link">
            <i class="ti-unlock"></i>
            <p>Salir</p>
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
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
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
