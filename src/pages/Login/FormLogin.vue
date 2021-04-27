<template>
  <div class="col-md-4 login-sec text-center">
    <h2 class="text-center">Inicio de sesión</h2>
    <form v-on:submit.prevent="Login">
      <div class="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ingrese su correo"
          required
          v-model="dataLogin.Correo"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Ingrese su contraseña"
          required
          v-model="password"
        />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="Act"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Acepto la política de protección de datos.<br />
          <a
            href="https://print-manager-bi.000webhostapp.com/Pol%C3%ADtica%20de%20Tratamiento%20de%20Datos%20-%20PRINT%20MANAGER%20BI.pdf"
            target="_blanck"
            >ver online</a
          >
        </label>
      </div>
      <div>
        <button type="submit" :disabled="!Act" class="btn btn-info">
          Ingresar
        </button>
      </div>
      <br />
      <button class="btn btn-primary" @click="$emit('Handler')">
        ¿Restablecer Contraseña?
      </button>
    </form>
  </div>
</template>

<script>
import { sha256 } from "@/lib/bcrypt.js";
import { mapActions } from "vuex";
export default {
  data: () => ({
    dataLogin: {
      Correo: "",
      Pass: "",
    },
    Act: false,
    password: "",
  }),
  watch: {
    password(newvalue) {
      this.dataLogin.Pass = sha256(newvalue);
    },
  },
  methods: {
    ...mapActions("users", ["actLogin"]),
    async Login() {
      if (await this.actLogin(this.dataLogin)) {
        this.$notify({
          message: "Bienvenido",
          icon: "ti-check",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
        });
        this.$router.push("aboutus");
      } else {
        this.$notify({
          message: "Usuario o contraseña invalidos",
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