<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <p>|</p>
    <router-link to="/ask">Ask</router-link>
    <p>|</p>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  list-style: none;
  text-decoration: none;
}
.header {
  color: #fff;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: #fff;
}

</style>
