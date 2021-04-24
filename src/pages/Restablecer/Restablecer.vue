<template>
  <div class="main-encuesta">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid text-center">
        <h1>Restablecer Contraseña</h1>
      </div>
    </nav>
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container">
        <ChangePassVue
          v-if="id !== ''"
          ActionForm="RESTABLECER"
          :DataUser="{ id_Usuario: this.id }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ChangePassVue from "../Perfil/ChangePass.vue";
mapActions;
export default {
  components: {
    ChangePassVue,
  },
  data: () => ({
    id: "",
  }),
  methods: {
    ...mapActions("users", ["actValidarRutaRecuperarContrasena"]),
  },
  async created() {
    let res = await this.actValidarRutaRecuperarContrasena({
      URL: this.$route.params.id,
    });
    if (!res) {
      this.$router.push({ path: "/login" });
    } else {
      this.id = res.id_Usuario;
    }
  },
};
</script>

<style lang="css" scoped>
.main-encuesta {
  width: 100%;
  height: 100vh;
}
.main-encuesta .container-fluid {
  height: 85%;
}
</style>