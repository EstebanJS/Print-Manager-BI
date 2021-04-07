<template>
  <table class="table table-bordered my-2">
    <thead>
      <tr class="table-active">
        <th scope="col" v-for="head in TableHeaders" :key="head">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(item, i) in row" :key="i">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    TableHeaders: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>