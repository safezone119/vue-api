<template>
  <div id="app">
    <toolbar></toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    
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

<style>
*{
  padding: 0;
  margin: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
.page-enter-active, .page-leave-active{
  transition: opacity 1s;
}
.page-enter, .page-leave{
  opacity: 0;
}

.list li{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>
