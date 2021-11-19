<template>

<div>
    <section>
        <div>
            <div class="user-info">
                <i class="fas fa-user"></i>
                <router-link :to="`/user/${fetchedAskInfo.user}`">
                    {{fetchedAskInfo.user}}
                </router-link>
                {{fetchedAskInfo.time_ago}}
            </div>
            <h2>{{fetchedAskInfo.title}}</h2>
        </div>
    </section>
    <section>
       <div v-html="fetchedAskInfo.content"></div>
    </section>
  
   
</div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
       ...mapGetters(['fetchedAskInfo'])
    },
    created(){
        const id = this.$route.params.id
        this.$store.dispatch("fetchAskInfo", id);
    }
}

</script>

<style>
.user-info{
    padding-top: 50px;
    display: flex;
}
</style>