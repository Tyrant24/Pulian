import { createStore } from 'vuex'

export default createStore({
    state: {
        count: ''
    },
    mutations: {
    // 进行数据更新，改变数据状态
        countType(state, action){
            state.count =  state.count + action.payload
        }
    },
    actions: {
    //执行动作，数据请求
        addCount({commit}){
            fetch('../data.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                let action = {
                    type: 'countType',
                    payload: myJson.text
                }
                commit(action)
            });
        }
    },
    getters: {
    // 获取到最终的数据结果
        getCount(state){
            return state.count
        }
    }
})
