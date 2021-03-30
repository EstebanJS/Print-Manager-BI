<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col-md-4">
        <fg-input
          type="email"
          label="Ingrese el correo del usuario"
          placeholder="Correo del usuario"
          v-model="Email"
        >
        </fg-input>
      </div>
    </div>
    <div>
      <p-button type="info" round @click.native.prevent="EventButton">
        Buscar usuario
      </p-button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    Email: "",
  }),
  methods: {
    EventButton() {
       this.$emit("callback", this.Email);
    },
  },
};
</script>

<style>
</style>