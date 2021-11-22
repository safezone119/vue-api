<template>
  <!-- V1 -->
  <!-- <user-profile :propsData = userInfo></user-profile> -->
  <!-- V2 -->
  <user-profile :info="userInfo">
    <slot name="username">
      {{ userInfo.id }}
    </slot>
    <span slot name="time">
      {{ userInfo.created }}
    </span>
    <span slot name="karma">
      {{ userInfo.karma }}
    </span>
  </user-profile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  //<!-- V2 -->
  computed:{
    userInfo(){
      return this.$store.state.user;
    },
  },
  created() {
    // state에 저장된 유저 데이터 불러와서 user-profile에 보냄
    const userName = this.$route.params.id;
    this.$store.dispatch("fetchUserInfo", userName)
  }
};
</script>

<style></style>
