import { createStore } from "vuex"

const store = createStore({
    state:{
        searchResultSong: [],
        searchResultArtist: [],
        searchSongBool: false,
        searchArtistBool: false,
        currentPlaylist: [],
        currentlyPlayingIndex: 0,
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
        setPlaylist(state, x){
            //state.currentPlaylist = state.searchResultSong.content.slice(x)
            state.currentPlaylist = state.searchResultSong.content
            state.currentlyPlayingIndex = x
        },
        playNext(state){
            state.currentlyPlayingIndex++
        },
        playPrevious(state){
            if(state.currentlyPlayingIndex > 0){
                state.currentlyPlayingIndex--
            }
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