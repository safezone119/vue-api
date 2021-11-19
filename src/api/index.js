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
function getAsksList(){

    return axios.get(`${config.baseUrl}ask/1.json`) ;
}
// -------- USERINFO ---------- //
function getUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
// -------- ASKDETAIL ---------- //
function getAskInfo(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}
export{
    getNewsList,
    getAsksList,
    getJobsList,
    getUserInfo,
    getAskInfo
}