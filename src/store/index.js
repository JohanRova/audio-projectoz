import { createStore } from "vuex"

const store = createStore({
    state:{
        searchResultSong: [],
        searchResultArtist: [],
        searchSongBool: false,
        searchArtistBool: false,
    },
    mutations:{
        setSearchSong(state, x){
            state.searchArtistBool = false
            state.searchResultArtist = []
            state.searchResultSong = x
            state.searchSongBool = true
        },
        setSearchArtist(state, x){
            state.searchSongBool = false
            state.searchResultSong = []
            state.searchResultArtist = x
            state.searchArtistBool = true
        },

    },
    actions:{
        async ({commit}){
            let name = 'Vue with vuex'
            commmit('setName', name)
        }
    }
})

export default store