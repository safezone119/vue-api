import axios from 'axios';

// 1. 기본 주소 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리

// -------- NEWS ---------- //
function getNewsList(){
    // return axios.get(config.baseUrl + '/news/1.json');
    // ES6 백틱을 사용한 문법
    return axios.get(`${config.baseUrl}news/1.json`) ;
}
// -------- JOBS ---------- //
function getJobsList(){

    return axios.get(`${config.baseUrl}jobs/1.json`) ;
}

// -------- ASK ---------- //
function getAskList(){

    return axios.get(`${config.baseUrl}ask/1.json`) ;
}
export{
    getNewsList,
    getAskList,
    getJobsList
}