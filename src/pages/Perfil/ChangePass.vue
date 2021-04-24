<template>
  <card class="card" title="Cambio de contraseña">
    <form v-on:submit.prevent="Action">
      <div v-if="ActionForm === 'PERFIL'" class="form-group">
        <label for="oldPass">Contraseña anterior</label>
        <input
          type="password"
          class="form-control"
          id="oldPass"
          v-model="ChangePass.Pass_Old"
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
          v-model="ChangePass.Pass_New"
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
          v-model="repetPass"
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
import { evalObjetForm } from "@/lib/validation.js";
import { sha256 } from "@/lib/bcrypt.js";
import { mapActions } from "vuex";
export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
    },
    DataUser: {
      type: Object,
      required: false,
    },
  },
  data: () => ({
    ChangePass: {},
    ClearChangePass: {
      id_Usuario: "",
      Pass_Old: "",
      Pass_New: "",
    },
    repetPass: "",
  }),
  methods: {
    ...mapActions("users", ["actChangePass", "actRestablecerContrasenaCorreo"]),
    async Action() {
      if (!evalObjetForm(this.ChangePass)) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        if (this.repetPass === this.ChangePass.Pass_New) {
          this.ChangePass.Pass_Old = sha256(this.ChangePass.Pass_Old);
          this.ChangePass.Pass_New = sha256(this.ChangePass.Pass_New);
          switch (this.ActionForm) {
            case "PERFIL":
              if (await this.actChangePass(this.ChangePass)) {
                this.$notify({
                  message: `Se ha cambiado la contraseña para el usuario ${this.DataUser.nombre}`,
                  icon: "ti-check",
                  horizontalAlign: "right",
                  verticalAlign: "bottom",
                  type: "success",
                });
              } else {
                this.$notify({
                  message: "La contraseña no pudo actualizarse",
                  icon: "ti-alert",
                  horizontalAlign: "right",
                  verticalAlign: "bottom",
                  type: "warning",
                });
              }
              break;

            case "RESTABLECER":
              let res = await this.actRestablecerContrasenaCorreo({
                id_Usuario: this.ChangePass.id_Usuario,
                Pass_New: this.ChangePass.Pass_New,
              });
              if (res) {
                this.$notify({
                  message: `Se ha cambiado la contraseña para el usuario ${res.nombre}`,
                  icon: "ti-check",
                  horizontalAlign: "right",
                  verticalAlign: "bottom",
                  type: "success",
                });
                this.$outer.push({ path: "/login" });
              } else {
                this.$notify({
                  message: "La contraseña no pudo actualizarse",
                  icon: "ti-alert",
                  horizontalAlign: "right",
                  verticalAlign: "bottom",
                  type: "warning",
                });
              }
              break;
          }

          this.repetPass = "";
          this.ChangePass = { ...this.ClearChangePass };
          this.ChangePass.id_Usuario = this.DataUser.id_Usuario;
        } else {
          this.$notify({
            message: "Las contraseñas no coinciden",
            icon: "ti-alert",
            horizontalAlign: "right",
            verticalAlign: "bottom",
            type: "warning",
          });
        }
      }
    },
  },
  created() {
    if (this.DataUser) {
      this.ChangePass.id_Usuario = this.DataUser.id_Usuario;
    }
    if (this.ActionForm === "RESTABLECER")
      this.ChangePass.Pass_Old = "RESTABLECER";
  },
};
</script>

<style>
</style>