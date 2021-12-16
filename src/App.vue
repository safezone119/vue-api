<template>
  <div id="app">
    <toolbar></toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import toolbar from "./components/ToolBar.vue"
import spinner from "./components/Spinner.vue"
import bus from './utils/bus.js'
export default {
  components: {
    toolbar,
    spinner,
  },
  data(){
    return {
      loadingStatus: false,
    };
  },
  methods: {
     startSpinner(){
        this.loadingStatus = true;
     },
     endSpinner(){
       this.loadingStatus = false;
     }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  //event bus 는 이벤트 객체가 계속 쌓이기 때문에 사용한 이후에 꼭 off 처리해줘야함
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
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
.userBox{
  display: flex;
  flex-direction: column;
}
</style>
