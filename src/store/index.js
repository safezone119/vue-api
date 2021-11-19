import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '../store/module/mutations'
import actions from '../store/module/actions'
import getters from '../store/module/getters'
import state from '../store/module/state'
Vue.use(Vuex);

export const store = new Vuex.Store({
    mutations,
    state,
    getters,
    actions,
})