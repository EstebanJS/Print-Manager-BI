<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-5">
        <label for="exampleFormControlSelect1">Modelo</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>ECOSYS M2040dn/L</option>
          <option>ECOSYS P3045dn</option>
        </select>
      </div>
      <div class="col-md-3">
        <fg-input
          type="text"
          label="Serie"
          placeholder="Serie"
          v-model="device.Serial"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Multifuncional</label
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <fg-input
          type="text"
          label="IP"
          placeholder="IP"
          v-model="device.firstName"
        >
        </fg-input>
      </div>
      <div class="col-md-6">
        <label for="exampleFormControlSelect1">Ciudad</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Bogota</option>
          <option>Cali</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Dirección"
          placeholder="Dirección"
          v-model="device.address"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Contador de paginas"
          placeholder="Contador"
          v-model="device.Contador"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Fecha de asignación"
          placeholder="Fecha de asignación"
          v-model="device.asigna"
        >
        </fg-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Cliente"
          placeholder="Cliente"
          v-model="device.city"
        >
        </fg-input>
      </div>
      <div class="col-md-4">
        <label for="exampleFormControlSelect1">Estado</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>
      <div class="col-md-4">
        <fg-input
          type="text"
          label="Fecha Ultimo Servicio"
          placeholder="Fecha Ultimo Servicio"
          v-model="device.postalCode"
        >
        </fg-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Observaciones</label>
          <textarea
            rows="5"
            class="form-control border-input"
            placeholder="Here can be your description"
            v-model="device.aboutMe"
          >
          </textarea>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p-button type="info" round @click.native.prevent="updateProfile">
        Agregar Dispositivo
      </p-button>
    </div>
    <div class="clearfix"></div>
  </form>
</template>

<script>
export default {
  props: {
      ActionForm: {
      type: String,
      required: true,
      default: "ADD",
    },
    DataDeviceProps: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
  data: () => ({
    device: {
      id_Modelo_Dispositivo: "1",
      Serial: "michael23",
      Multifuncional: "True",
      firstName: "192.168.1.26",
      lastName: "Faker",
      address: "Calle 42 # 15 -54",
      city: "Jerónimo Martins",
      postalCode: "17/03/2021",
      aboutMe: `se instalo la maquina en la sede.`,
      Contador: "4952",
      asigna: "17/03/2021",
    },
  }),
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.device));
    },
  },
};
</script>

<style>
</style>