<template>
  <card class="card" title="Editar Dispositivo">
    <div>
      <SearchDeviceVue v-on:callback="callBackSearchDevice" />
    </div>
    <div>
      <FormDevicesVue
        v-if="DeviceInfo != undefined"
        ActionForm="EDIT"
        :DataDeviceProps="DeviceInfo"
        v-on:callback="callBackClean"
      />
    </div>
  </card>
</template>
<script>
import FormDevicesVue from "./FormDevices.vue";
import SearchDeviceVue from "./SearchDevice.vue";
export default {
  components: {
    FormDevicesVue,
    SearchDeviceVue,
  },
  data: () => ({
    DeviceInfo: undefined,
  }),
  methods: {
    callBackSearchDevice(data) {
      if (typeof data === "object") {
        this.DeviceInfo = data;
      } 
    },
    callBackClean() {
      this.DeviceInfo = undefined;
    },
  },
};
</script>
<style>
</style>