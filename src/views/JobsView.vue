<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.value">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobList: [],
    };
  },

  created() {
    this.$store.dispatch("fetchJobs");
  },
};
</script>

<style></style>
