<template>
  <div>
    <ul class="list" v-for="item in fetchedNews" :key="item.value">
      <li>
        <div class="points">
          {{item.points}}
        </div>
        <div>
          <a :href="item.url">
          {{ item.title }}
          </a>
        </div>
        <div>
          <small> 
            {{ item.time_ago }} by 
            <!-- #1 라우터 링크를 이용해서 유저 이름 클릭 시 상세 페이지로 넘김 -->
            <!-- <router-link :to="'/user/' + item.user"> {{ item.user }} </router-link> -->

            <!-- ES6 문법 -->
            <router-link :to="`/user/${item.user}`"> {{ item.user }} </router-link>        
          </small>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  
  computed: {
    ...mapGetters({
      fetchedNews: "fetchedNews"
    })
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

<style scoped>

</style>
