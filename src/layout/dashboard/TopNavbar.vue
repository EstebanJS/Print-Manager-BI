<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ routeName }}</a>
      <button
        class="navbar-toggler navbar-burger"
        type="button"
        @click="toggleSidebar"
        :aria-expanded="$sidebar.showSidebar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <drop-down
            class="nav-item"
            title="Opciones"
            title-classes="nav-link"
            icon="ti-settings"
          >
            <a href="#/AboutUs" class="nav-link">
              <i class="ti-info"></i>
              <p>Acerca de</p>
            </a>
            <a href="#/perfil" class="nav-link">
              <i class="ti-id-badge"></i>
              <p>Perfil</p>
            </a>
            <a @click="LogOut" class="nav-link">
              <i class="ti-unlock"></i>
              <p>Salir</p>
            </a>
          </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapActions } from "vuex";
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      activeNotifications: false,
    };
  },
  methods: {
    ...mapActions("users",["actLogout"]),
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
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
        this.$router.push({path:"/login"})
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
};
</script>
<style>
</style>
