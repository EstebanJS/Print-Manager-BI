<template>
  <div class="col-md-4 login-sec text-center">
    <h2 class="text-center">Restablecer Contraseña</h2>
    <form v-on:submit.prevent="Restablecer">
      <div class="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ingrese su correo"
          required
          v-model="Correo"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-info">Restablecer Contraseña</button>
      </div>
      <br />

      <button class="btn btn-primary" @click="$emit('Handler')">
        Ir al login
      </button>
    </form>
  </div>
</template>

<script>


export default {
  data: () => ({
    Correo:""
  }),
  methods: {
    Restablecer() {
      alert(this.Correo)
    },
  },
};
</script>

<style>
</style>