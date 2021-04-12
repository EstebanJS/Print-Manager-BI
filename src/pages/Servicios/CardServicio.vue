<template>
  <card class="card" title="Servicio">
    <div class="row py-2">
      <div class="col-md-3">
        <h5 class="card-title">Serial del dispositivo:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.serial || "Nan" }}
        </p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Modelo del dispositivo:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.modelo_Dispositivo || "Nan" }}
        </p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Tipo de falla:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.falla || "Nan" }}</p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Estado Servicio:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.estado_Servicio || "Nan" }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-3">
        <h5 class="card-title">Tipo Servicio:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.nombre_Tipo_Servicio || "Nan" }}
        </p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Fecha de solicitud:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ ajustDate(DataServiceProps.fecha_Solicitud) || "Nan" }}
        </p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Nombre tecnico:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.nombre_Tecnico || "Nan" }}</p>
      </div>
      <div class="col-md-3">
        <h5 class="card-title">Correo tecnico:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.correo_Tecnico || "Nan" }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Empresa:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.empresa || "Nan" }}
        </p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Correo empresa:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.correo_Empresa || "Nan" }}
        </p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Telefono empresa:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.celular_Empresa || "Nan" }}</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md-4">
        <h5 class="card-title">Departamento:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.departamento || "Nan" }}
        </p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Ciudad:</h5>
        <p v-if="DataServiceProps" class="card-text">
          {{ DataServiceProps.ciudad || "Nan" }}
        </p>
      </div>
      <div class="col-md-4">
        <h5 class="card-title">Dirección:</h5>
        <p v-if="DataServiceProps" class="card-text">{{ DataServiceProps.direccion || "Nan" }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import { formatDate } from "@/lib/until.js";
export default {
  props: {
    DataServiceProps: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ajustDate(dta) {
      return formatDate(dta);
    },
  },
};
</script>

<style>
</style>