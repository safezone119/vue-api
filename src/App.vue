<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import toolbar from "./components/ToolBar.vue";
export default {
  components: {
    toolbar,
  },
};
</script>

<style></style>
