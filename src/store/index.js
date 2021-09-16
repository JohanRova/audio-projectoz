import { createStore } from "vuex"

const store = createStore({
    state:{
        name: "Johan"
    },
    mutations:{
        setName(state, x){
            state.name = x
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