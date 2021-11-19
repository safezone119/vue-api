<template>
<user-profile :propsData = userInfo></user-profile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  created() {
    // state에 저장된 유저 데이터 불러와서 user-profile에 보냄
    const userName = this.$route.params.id;
    this.$store.dispatch("fetchUserInfo", userName)
  }
};
</script>

<style></style>
