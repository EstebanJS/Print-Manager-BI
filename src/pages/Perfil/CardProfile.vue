<template>
  <card class="card" title="Perfil">
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Nombre:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.nombre||'Nan' }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Tipo documento:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.tipo_Documento ||'Nan' }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Número documento:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.numero_Doc }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Ciudad:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.ciudad }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Dirección:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.direccion }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Número telfono:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.celular }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Empresa:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.empresa }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Rol:</h5>
        <p v-if="DataUser" class="card-text">{{ DataUser.rol }}</p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Fecha de creación:</h5>
        <p class v-if="DataUser">{{ formatDateMto(DataUser.fecha_Creacion) }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import { formatDate } from "@/lib/until.js";
export default {
  props:{
    DataUser:{
      type:Object,
      required:true
    }
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