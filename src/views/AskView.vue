<template>
  <div>
    <ul class="list" v-for="item in fetchedAsk " :key="item.value">
      <li>
        <p class="points">{{item.points}}</p>
         <router-link :to="`/item/${item.id}`">
            {{ item.title }}
         </router-link>
        <small> {{ item.time_ago }} by 
          {{ item.user }} 
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters({
      fetchedAsk: "fetchedAsk"
    })
  },

  created() {
    this.$store.dispatch("fetchAsk");
  },
};
</script>

<style></style>
