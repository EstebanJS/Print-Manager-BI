<template>
  <card class="card" title="Perfil">
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Nombre:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.nombre||'Nan' }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Tipo documento:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.tipo_Documento ||'Nan' }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Número documento:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.numero_Doc }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Ciudad:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.ciudad }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Dirección:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.direccion }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Número telfono:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.celular }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Empresa:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.empresa }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Rol:</h5>
        <p v-if="getDataUser" class="card-text">{{ getDataUser.rol }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Fecha de creación:</h5>
        <p class v-if="getDataUser">{{ formatDateMto(getDataUser.fecha_Creacion) }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import { formatDate } from "@/lib/until.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("users", ["getDataUser"]),
  },
  methods: {
    formatDateMto(date) {
      return formatDate(date);
    },
  }
};
</script>

<style>
</style>