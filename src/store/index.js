import { createStore } from "vuex"

const store = createStore({
    state:{
        searchResult: []
    },
    mutations:{
        setSearch(state, x){
            state.searchResult = x
        }
    },
    actions:{
        async ({commit}){
            let name = 'Vue with vuex'
            commmit('setName', name)
        }
    }
})

export default store