<template>
  <!--search results song etc.-->
  <div></div>
</template>

<script>

export default {
  //components: { MediaController },
  mounted(){
    console.log("Home mounted")
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