<template>
  <div>
    <ul class="list" v-for="item in fetchedJobs" :key="item.value">
      <li>   
        <p class="points">{{item.time_ago}}</p>   
        <a :href="item.url">{{ item.title}}</a>
        <small>{{item.time_ago}},{{ item.domain }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs"
    })
  },

  created() {
    this.$store.dispatch("fetchJobs");
  },
};
</script>

<style>
.points{ width: 120px;}
</style>
