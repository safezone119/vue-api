import Vue from 'vue';
import Vuex from 'vuex';
import { getNewsList, getJobsList, getAsksList } from "../api/index.js";
Vue.use(Vuex);

export const store = new Vuex.Store({

    state:  {
        news: [],
        jobs: [],
        ask: []
    },
    getters: {
        fetchedAsk(state){
            return state.ask;
        },
        fetchedJobs(state){
            return state.jobs;
        }
    },

    actions: {

        //------------------------ NEWS -----------------------------//

        // context === mutations에 접근할 수 있도록 하는 인자
        fetchNews(context){
            getNewsList().then(response => {
                // context를 이용한 mutation 호출
                // commit을 이용하여 setNews에 데이터를 넘김
                // console.log(response.data)
                context.commit('SET_NEWS', response.data);
            }).catch(error => {
                console.log(error);
            })
        },

        //------------------------ JOBS -----------------------------//

        fetchJobs({ commit }){
            // 객체 디스트럭처링 //
            getJobsList()
            .then(({ data }) => {
                commit('SET_JOBS',data);
            }).catch(error => console.log(error))
        },

        //------------------------ ASK -----------------------------//
        
        fetchAsk({ commit }){
            getAsksList()
            .then(({ data }) => {
                commit("SET_ASKS", data)
            }).catch(error => console.log('catchError', error))
        }

    },
    mutations: {
        // mutation 에서 state로 값을 넘기기 때문에 state 인자 값을 받음
        SET_NEWS(state, news){
            state.news = news; // state 데이터 속성 변경   
            // state.news = 10;
        },

        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },

        SET_ASKS(state, ask){
            state.ask = ask;
        }
    }

})