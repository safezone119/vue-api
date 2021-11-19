<template>
  <div>
    <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p>
    <!-- <p>{{this.$store.state.user.id}}</p> -->
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  computed:{
    userInfo(){
      return this.$store.state.user;
    },
  },
  created() {
    // 인덱스에서 받은 파람스 아이디를 API에 태워서 보냄
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}`);
    this.$store.dispatch("fetchUserInfo", userName)
  }
};
</script>

<style></style>
