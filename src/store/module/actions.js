import { getNewsList, getJobsList, getAsksList,getUserInfo, getAskInfo} from "../../api/index";
export default {

        //------------------------ NEWS -----------------------------//

        // context === mutations에 접근할 수 있도록 하는 인자
        fetchNews(context){
            getNewsList().then(response => {
                // context를 이용한 mutation 호출
                // commit을 이용하여 setNews에 데이터를 넘김
                // console.log(response.data)
                context.commit('SET_NEWS', response.data);
                //응답 데이터를 화면에 돌려보내어 spinner 처리
                return response;
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
        },

        //------------------------ USERINFO -----------------------------//

        fetchUserInfo({ commit }, name){
            getUserInfo(name).then(({data}) => {
                commit("SET_USER", data);
            }).catch(error => console.log('catchError', error));
        },

        //------------------------ ASKINFO -----------------------------//
        fetchAskInfo({commit}, id){
            console.log('action')
            getAskInfo(id).then(({data}) => {
                commit("SET_INFO", data);
                console.log(data);
            }).catch(error => console.log('catchError', error));
            
        }

}