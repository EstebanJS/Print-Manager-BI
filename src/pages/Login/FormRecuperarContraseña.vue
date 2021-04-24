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
        <button type="submit" class="btn btn-info">
          Restablecer Contraseña
        </button>
      </div>
      <br />

      <button class="btn btn-primary" @click="$emit('Handler')">
        Ir al login
      </button>
    </form>
  </div>
</template>

<script>
import { sha256 } from "@/lib/bcrypt.js";
import { mapActions } from "vuex";
export default {
  data: () => ({
    Correo: "",
  }),
  methods: {
    ...mapActions("users", ["actSolicitudRestablecerContraseña"]),
    async Restablecer() {
      let data = {
        Correo: this.Correo,
        URL: sha256(`|${this.Correo}|${new Date()}`),
      };
      if (await this.actSolicitudRestablecerContraseña(data)) {
        this.$notify({
          message: `Ingrese a su correo para continuar con el proceso`,
          icon: "ti-check",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
        });
        this.$emit('Handler')
      } else {
        this.$notify({
          message: `No se pudo realizar el proceso`,
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