<template>
  <!--search results song etc.-->
  <template v-if="this.$store.state.searchArtistBool === true">
    <div class="d-inline-flex" style="margin-top:2vh">
      <ol
        id="array-rendering"
        class="list-group"
        style="width: 95vw; margin-bottom: 15vw"
      >
        <li
          class="list-group-item d-flex flex-column"
          v-for="item in this.$store.state.searchResultArtist.content"
          v-bind:key="item.id"
        >
          <div class="d-flex flex-row justify-content-center">
            <div class="p-2 border border-primary rounded mx-2 w-50">
              {{ item.name }}
            </div>
             <button
             v-on:click="searchSong(item.name)"
                type="button"
                class="btn btn-outline-primary mx-1 p-2"
                style="display: flex; color:black"
            >
            See artists songs
            </button>
            <button
              data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" data-bs-custom-class="border"
              v-on:click="copyShareLink(item.browseId, 'artist' )"
              type="button"
              class="btn btn-outline-primary mx-1"
              style="display: flex"
            >
              <img src="/src/icons/share.svg" />
            </button>
          </div>
        </li>
      </ol>
    </div>
  </template>
</template>

<script>
import MediaController from '../components/MediaController.vue';

export default {
  //components: { MediaController },
  mounted(){
    
    if((this.$route.params.videoId === undefined) && (this.$route.params.artistId === undefined))
    {
      console.log("Both parameters undefined")

    }
    else if(this.$route.params.videoId != undefined)
    {
      this.searchSong(this.$route.params.videoId) 
    }
    else if(this.$route.params.artistId != undefined){
      this.searchArtist(this.$route.params.artistId)
    }


  },
  data() {
    return {
      searchterm: "",
      items: [{ message: "foo" }, { message: "bar" }],
      searchResult: [],
    };
  },
  methods: {
    play(id, index){
      console.log(id)
      window.player.loadVideoById(id)
      window.player.playVideo()
      this.$store.commit("setPlaylist", index)
      console.log(this.$store.state.currentlyPlayingIndex)
      //console.log(this.$store.state.currentPlaylist)
    },
    copyShareLink(videoId, shareType){
      navigator.clipboard.writeText("localhost:3000/" + shareType + "/" + videoId)
    }
  },
};
</script>