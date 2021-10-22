<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.value">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
// import { fetchNews } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },

  created() {
    // 스토어에 있는 fetchNews API를 가져옴
    this.$store.dispatch("fetchNews");
    //1
    // getNewsList()
    //   .then((response) => {
    //     //2
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
