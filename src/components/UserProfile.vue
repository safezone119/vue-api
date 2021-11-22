<template>
  <div>
    <section>
        <div class="user-container">
            <div class="user-info">
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username"> 
                  <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <slot time="time">
                  <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <slot name="karma">
                   <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  // ---- V1 -------- //
  // computed:{
  //   userInfo(){
  //     return this.$store.state.user;
  //   },
  // },
  // --- V2 ----//
  props: {
    info: Object
  },
}
</script>

<style>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
.userBox{
  display: flex;
  flex-direction: column;
}
</style>