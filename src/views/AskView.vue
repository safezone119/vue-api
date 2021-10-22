<template>
  <div>
    <div v-for="ask in gettterAsk" :key="ask.value">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ... (스프레이드 오퍼레이터 객체) or 배열을 풀어서 넣어주는 역할
    // 스프레드 오퍼레이터는 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용
    ...mapGetters({
      getAsk: "gettterAsk",
    }),

    // #2 배열로 바로 연결해서 사용 가능함
    // ...mapGetters(["gettterAsk"]),
  },

  created() {
    this.$store.dispatch("fetchAsk");
  },
};
</script>

<style></style>
