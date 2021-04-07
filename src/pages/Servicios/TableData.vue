<template>
  <div class="my-2">
    <h5 class="text-center">{{ title }}</h5>
    <table class="table table-bordered">
      <thead>
        <tr class="table-active">
          <th scope="col" v-for="head in TableHeaders" :key="head">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(item, i) in row" :key="i">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
</style>