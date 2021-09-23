<template>
  <div class="fixed-bottom border border-4 bg-info" style="height: 15vh">
    <div>
      <div class="d-flex justify-content-center" style="padding-top: 1vh">
        <button
          v-on:click="playPrevious()"
          type="button"
          class="btn btn-outline-primary mx-1 bg-primary"
          style="display: flex"
        >
          <img src="/src/icons/skip-backward.svg" />
        </button>
        <button
          v-on:click="playAgain()"
          type="button"
          class="btn btn-outline-primary mx-1 bg-primary"
          style="display: flex"
        >
          <img src="/src/icons/play.svg" />
        </button>
        <button
          v-on:click="pause()"
          type="button"
          class="btn btn-outline-primary mx-1 bg-primary"
          style="display: flex"
        >
          <img src="/src/icons/pause.svg" />
        </button>
        <button
          v-on:click="playNext()"
          type="button"
          class="btn btn-outline-primary mx-1 bg-primary"
          style="display: flex"
        >
          <img src="/src/icons/skip-forward.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  },
  methods: {
    play(id, index) {
      console.log(id);
      window.player.loadVideoById(id);
      window.player.playVideo();
      this.$store.commit("setPlaylist", index);
      console.log(this.$store.state.currentlyPlayingIndex);
      //console.log(this.$store.state.currentPlaylist)
    },
    pause(){
      window.player.pauseVideo()
    },
    playAgain()
    {
      window.player.playVideo()
    },
    playNext(){
      this.$store.commit("playNext")
      console.log(this.$store.state.currentlyPlayingIndex)
      window.player.loadVideoById(this.$store.state.currentPlaylist[this.$store.state.currentlyPlayingIndex].videoId)
      window.player.playVideo()
    },
    playPrevious(){
      this.$store.commit("playPrevious")
      window.player.loadVideoById(this.$store.state.currentPlaylist[this.$store.state.currentlyPlayingIndex].videoId)
      window.player.playVideo()
    },
  },
};
</script>