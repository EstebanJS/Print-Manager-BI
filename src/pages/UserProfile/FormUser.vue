<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-3">
        <label for="Rol">Rol</label>
        <select class="form-control" id="Rol" v-model="user.Rol">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="TipDoc">Tipo documento</label>
        <select class="form-control" id="TipDoc" v-model="user.TipDoc">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="Genero">Genero</label>
        <select class="form-control" id="Genero" v-model="user.Genero">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="Ciudad">Ciudad</label>
        <select class="form-control" id="Ciudad" v-model="user.Ciudad">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Nombres"
          placeholder="Ingrese el o los nombres"
          v-model="user.Nombres"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Apellidos"
          placeholder="Ingrese los apellidos"
          v-model="user.Apellidos"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <label for="Empresa">Empresa</label>
        <select class="form-control" id="Empresa">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Número Documento"
          placeholder="Ingrese el documento sin puntos ni comas"
          v-model="user.NumDoc"
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
          v-model="user.Email"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <label for="Estado">Estado</label>
        <select class="form-control" id="Estado">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Dirección"
          placeholder="Ingrese dirección de residencia"
          v-model="user.Direccion"
        >
        </fg-input>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Celular"
          placeholder="Ingrese el número de celular sin puntos ni espacios"
          v-model="user.Celular"
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
import Vue from "vue";
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
    user: {
      Rol: "Adm",
      TipDoc: "CC",
      Genero: "M",
      Ciudad: "Melbourne",
      Nombres: "Chet",
      Apellidos: "Faker",
      Empresa: "Paper Dashboard",
      NumDoc: "21321321",
      Email: "test@email.com",
      Estado: "Act",
      Direccion: "Melbourne, Australia",
      Celular: "32165484",
    },
  }),
  methods: {
    EventButton() {
      console.log("Your data: " + JSON.stringify(this.user));
      switch (this.ActionForm) {
        case "ADD":
          console.log("ADD");
          break;
        case "EDIT":
          console.log("EDIT");
          break;
        default:
          console.log("ERROR ACTION BUTTON IN FORM USER");
          break;
      }
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
  },
  created() {
    if (this.DataUserProps) {
      this.user = { ...this.DataUserProps };
    }
  },
};
</script>

<style>
</style>