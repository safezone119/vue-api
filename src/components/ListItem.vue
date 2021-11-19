<template>
    <div>
    <ul class="list" v-for="item in listItems" :key="item.index">
      <li>
        <div class="points">
          {{item.points || "•" }}
        </div>
        <div>
        <!-- 라우터 링크 분기 처리 -->
        <template v-if="item.domain">
          <a :href="item.url">
          {{ item.title }}
          </a>
        </template>
        <template v-else>
            <router-link :to="`item/${item.id}`">
            {{ item.title }}
            </router-link>
        </template>
        </div>
        <div>
        <!-- ask 링크 분기 처리 -->
          <small> 
            {{ item.time_ago }} by 
            <router-link v-if="item.user" :to="`/user/${item.user}`"> {{ item.user }} </router-link>   
            <a :href="item.url" v-else>
              {{item.domain}}
            </a>     
          </small>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems () {
    const name = this.$route.name;
      if(name === "news"){
        return this.$store.state.news;
      }else if(name === "ask"){
        return this.$store.state.ask;
      }else{
        return this.$store.state.jobs;
      }
    },
  },
  created() {
    
    //페이지 별 분기 처리
    const name = this.$route.name;
    if(name === "news"){
        this.data = this.$store.dispatch("fetchNews");
    }else if(name === "ask"){
        this.data = this.$store.dispatch("fetchAsk");
    }else{
        this.data =this.$store.dispatch("fetchJobs")
    }
  },
}
</script>

<style>

</style>