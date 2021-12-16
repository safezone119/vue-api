// import ListView from '../views/ListView.vue';

export default function createListView(name) {
    return {
        // 재사용할 컴포넌트 옵션들
        name: name,
        render(createElement){
            return createElement();
        }
    }
}