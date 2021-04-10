<template>
  <card class="card" title="Cambio de contraseña">
    <form v-on:submit.prevent="Action">
      <div class="form-group">
        <label for="oldPass">Contraseña anterior</label>
        <input
          type="password"
          class="form-control"
          id="oldPass"
          aria-describedby="emailHelp"
          placeholder="Ingrese su contraseña anterior"
          required
        />
      </div>
      <div class="form-group">
        <label for="newPass">Contraseña nueva</label>
        <input
          type="password"
          class="form-control"
          id="newPass"
          aria-describedby="emailHelp"
          placeholder="Ingrese su contraseña anterior"
          required
        />
      </div>
      <div class="form-group">
        <label for="repetPass">Repita contraseña nueva</label>
        <input
          type="password"
          class="form-control"
          id="repetPass"
          aria-describedby="emailHelp"
          placeholder="Repita nueva contraseña"
          required
        />
      </div>
      <div>
        <button type="submit" class="btn btn-info">Cambiar contraseña</button>
      </div>
    </form>
  </card>
</template>

<script>
export default {};
</script>

<style>
</style>