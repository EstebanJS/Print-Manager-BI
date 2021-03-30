<template>
  <card class="card">
    <div>
      <SearchUserVue v-on:callback="callBackSearchUser"/>
    </div>
    <div>
      <FormUserVue ActionForm="EDIT" :DataUserProps="UserInfo"/>
    </div>
  </card>
</template>
<script>
import FormUserVue from "./FormUser.vue";
import SearchUserVue from "./SearchUser.vue";
export default {
  components: {
    FormUserVue,
    SearchUserVue,
  },
  data:()=>({
    UserInfo:undefined
  }),
  methods:{
    callBackSearchUser(data){
      // this.UserInfo = data
      alert(data)
    }
  }
};
</script>
<style>
</style>
