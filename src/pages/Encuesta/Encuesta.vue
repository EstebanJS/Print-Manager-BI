<template>
  <div class="main-encuesta">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid text-center">
        <h1>Encuesta de servicio</h1>
      </div>
    </nav>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="container">
        <FormEncuestaVue />
      </div>
    </div>
  </div>
</template>

<script>
import FormEncuestaVue from "./FormEncuesta.vue";
export default {
  components: {
    FormEncuestaVue,
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