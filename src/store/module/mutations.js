export default  {
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
    },
    SET_USER(state, user){
        state.user = user;
    },
    SET_INFO(state, askInfo){
        console.log('s')
        state.askInfo = askInfo;
    }
}