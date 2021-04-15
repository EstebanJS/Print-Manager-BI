<template>
  <div class="main-encuesta">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid text-center">
        <h1>Restablecer Contraseña</h1>
      </div>
    </nav>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="container">
        <ChangePassVue ActionForm="RESTABLECER"/>
      </div>
    </div>
  </div>
</template>

<script>
import ChangePassVue from '../Perfil/ChangePass.vue';

export default {
  components: {
    ChangePassVue,
  },
};
</script>

<style lang="css" scoped>
.main-encuesta{
  width: 100%;
  height: 100vh;
}
.main-encuesta .container-fluid{
  height: 85%;
}

</style>