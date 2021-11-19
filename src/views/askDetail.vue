<template>
<user-profile></user-profile>
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