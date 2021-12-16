<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
export default {
  components: {
    ListItem,
  },
  created(){
    // 데이터 호출 전
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('fetchNews')
      .then(() => {
        console.log('fetched');
            // 데이터 호출 후 
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      })
    }, 5000);


}
}

</script>

<style scoped>

</style>
