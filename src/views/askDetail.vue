<template>
    <div>
        <user-profile :info="fetchedAskInfo">
            <!-- 하위 컴포넌트 slot에서 정의할 영역 -->
            <div class="userBox">
                <slot name="username">
                    {{fetchedAskInfo.user}}
                </slot>
                <template name="time">
                    {{ 'Posted' + fetchedAskInfo.time_ago}}
                </template>                
            </div>
        </user-profile> 
        <section>
            <h2>{{ fetchedAskInfo.title }}</h2>
        </section>
        <section>
            <p v-html="fetchedAskInfo.content"></p> 
        </section>
    </div>



</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        UserProfile,
    },
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
</style>