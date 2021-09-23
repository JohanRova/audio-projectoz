<template>
  <div class="d-inline-flex" style="margin-top: 2vh">
    <ol
      id="array-rendering"
      class="list-group"
      style="width: 95vw; margin-bottom: 19vh"
    >
      <li
        class="list-group-item d-flex flex-column"
        v-for="(item, index) in this.$store.state.searchResultSong.content"
        v-bind:key="item.id"
      >
        <div class="d-flex flex-row justify-content-between">
          <button
            v-on:click="play(item.videoId, index)"
            type="button"
            class="btn btn-outline-primary mx-1"
            style="display: flex"
          >
            <img src="/src/icons/play.svg" />
          </button>
          <div class="p-2 border border-primary rounded mx-2 w-50">
            {{ item.name }}
          </div>
          <div class="p-2 border border-primary rounded mx-2 w-50">
            {{ item.artist.name }}
          </div>
          <button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
            data-bs-custom-class="border"
            v-on:click="copyShareLink(item.videoId, 'song')"
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

<script>
export default {
  mounted(){
      this.searchSong(this.$route.params.songId)
      
  },
  methods: {
    play(id, index) {
      console.log(id);
      window.player.loadVideoById(id);
      window.player.playVideo();
      this.$store.commit("setPlaylist", index);
      console.log(this.$store.state.currentlyPlayingIndex);
    },
    async searchSong(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/songs/" + searchFor
      );
      this.$store.commit("setSearchSong", await rawResponse.json());
      console.log(this.$store.state.searchResultSong);
    },
      copyShareLink(videoId, shareType){
      navigator.clipboard.writeText("localhost:3000/" + shareType + "/" + videoId)
    }
  },
};
</script>