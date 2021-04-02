<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-3">
        <label for="Rol">Rol</label>
        <select class="form-control" id="Rol" v-model="user.id_Rol">
          <option
            v-for="roll in getRollSelect"
            :key="roll.id_Rol"
            :value="roll.id_Rol"
          >
            {{ roll.nombre_Rol }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="TipDoc">Tipo documento</label>
        <select class="form-control" id="TipDoc" v-model="user.id_Tipo_Doc">
          <option
            v-for="tipDoc in getTipDocSelect"
            :key="tipDoc.id_Tipo_Doc"
            :value="tipDoc.id_Tipo_Doc"
          >
            {{ tipDoc.nombre_Doc }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="Genero">Genero</label>
        <select class="form-control" id="Genero" v-model="user.id_Genero">
          <option
            v-for="genero in getGeneroSelect"
            :key="genero.id_Genero"
            :value="genero.id_Genero"
          >
            {{ genero.nombre_Genero }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="Ciudad">Ciudad</label>
        <select class="form-control" id="Ciudad" v-model="user.id_Ciudad">
          <option
            v-for="ciudad in getCiudadSelect"
            :key="ciudad.id_Ciudad"
            :value="ciudad.id_Ciudad"
          >
            {{ ciudad.nombre_Ciudad }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Nombres"
          placeholder="Ingrese el o los nombres"
          v-model="user.nombres"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Apellidos"
          placeholder="Ingrese los apellidos"
          v-model="user.apellidos"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <label for="Empresa">Empresa</label>
        <select class="form-control" id="Empresa" v-model="user.id_Empresa">
          <option
            v-for="Empresa in getEmpresaSelect"
            :key="Empresa.id_Empresa"
            :value="Empresa.id_Empresa"
          >
            {{ Empresa.nombre_Empresa }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Número Documento"
          placeholder="Ingrese el documento sin puntos ni comas"
          v-model="user.numero_Doc"
        >
        </fg-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <fg-input
          type="email"
          label="Correo"
          placeholder="Ingrese dirección de correo "
          v-model="user.correo"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <label for="Estado">Estado</label>
        <select class="form-control" id="Estado" v-model="user.activo">
          <option :value="true">Activo</option>
          <option :value="false">Inactivo</option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Dirección"
          placeholder="Ingrese dirección de residencia"
          v-model="user.direccion"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Celular"
          placeholder="Ingrese el número de celular sin puntos ni espacios"
          v-model="user.celular"
        >
        </fg-input>
      </div>
    </div>

    <div v-if="this.ActionForm === 'ADD'" class="row">
      <div class="col-md-6">
        <fg-input
          type="password"
          label="Contraseña"
          placeholder="Ingrese Contraseña "
          v-model="user.contrasena"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input
          type="password"
          label="Repita Contraseña"
          placeholder="Reapita Contraseña "
          v-model="reptContrasena"
        >
        </fg-input>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>About Me</label>
          <textarea
            rows="5"
            class="form-control border-input"
            placeholder="Here can be your description"
            v-model="user.aboutMe"
          >
          </textarea>
        </div>
      </div>
    </div> -->
    <div class="text-center">
      <p-button type="info" round @click.native.prevent="EventButton">
        {{ ActionForm === "ADD" ? "Agregar Usuario" : "Actualizar Usuario" }}
      </p-button>
    </div>
    <div class="clearfix"></div>
  </form>
</template>

<script>
import { evalObjetForm } from "@/lib/validation.js";
import { sha256 } from "@/lib/bcrypt.js";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataUserProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    reptContrasena: "",
    user: {},
    ClearUser: {
      id_Rol: "",
      id_Tipo_Doc: "",
      id_Genero: "",
      id_Ciudad: "",
      nombres: "",
      apellidos: "",
      id_Empresa: "",
      numero_Doc: "",
      correo: "",
      activo: true,
      direccion: "",
      id_Ultimo_Usuarios_que_Modifico: 1,
      celular: "",
      contrasena: "",
      fecha_Creacion: "2020-03-29T00:00:00",
      fecha_Ultimo_Login: "2020-03-29T00:00:00",
    },
  }),
  computed: {
    ...mapGetters([
      "getEmpresaSelect",
      "getGeneroSelect",
      "getCiudadSelect",
      "getTipDocSelect",
      "getRollSelect",
    ]),
  },
  methods: {
    ...mapActions([
      "actLoadEmpresaSelect",
      "actLoadGeneroSelect",
      "actLoadCiudadSelect",
      "actLoadTipDocSelect",
      "actLoadRollSelect",
    ]),
    ...mapActions("users", ["actCreateNewUser", "actUpdateUser"]),
    EventButton() {
      if (
        !evalObjetForm(this.user) ||
        this.user.contrasena != this.reptContrasena
      ) {
        this.$notify({
          message: "Campos vacios o concaracteres invalidos ($%&|<>/-)",
          icon: "ti-alert",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "warning",
        });
      } else {
        switch (this.ActionForm) {
          case "ADD":
            this.user.contrasena = sha256(this.user.contrasena);
            if (!this.actCreateNewUser(this.user)) {
              this.successMessage();
            }else{
              this.errorMessage
            }
            break;
          case "EDIT":
            if (this.actUpdateUser(this.user)) {
              this.successMessage();
              this.$emit("callback");
            }else{
              this.errorMessage()
            }
            break;
          default:
            console.error("ERROR ACTION BUTTON IN FORM USER");
            break;
        }
        this.user = this.ClearUser;
        this.reptContrasena = "";
      }
    },
    successMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de usuario exitoso`,
        icon: "ti-check",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
      });
    },
    errorMessage() {
      this.$notify({
        message: `Proceso de ${
          this.ActionForm === "ADD" ? "Creacion " : "Actualizacion"
        } de usuario fallo`,
        icon: "ti-na",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "error",
      });
    },
  },
  created() {
    if (this.DataUserProps) {
      this.user = { ...this.DataUserProps };
      this.reptContrasena = this.user.contrasena;
    } else {
      this.user = { ...this.ClearUser };
    }
    if (this.getEmpresaSelect.length === 0) {
      this.actLoadEmpresaSelect();
    }
    if (this.getGeneroSelect.length === 0) {
      this.actLoadGeneroSelect();
    }
    if (this.getCiudadSelect.length === 0) {
      this.actLoadCiudadSelect();
    }
    if (this.getTipDocSelect.length === 0) {
      this.actLoadTipDocSelect();
    }
    if (this.getRollSelect.length === 0) {
      this.actLoadRollSelect();
    }
  },
};
</script>

<style>
</style>