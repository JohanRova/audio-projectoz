<template>
  <h1 style="position: absolute; top: 0; width: 100%">
    <a href="/">Musicalez</a>
  </h1>
  <div class="input-group mb-3" style="padding-left: 3vw; padding-right: 3vw">
    <div class="input-group-prepend"></div>
    <input
      v-model="searchterm"
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </div>
  <!--buttons for search-->
  <div class="d-flex flex-row justify-content-center">
  <router-link tag="button" class="btn btn-primary" :to="'/song' + '/metallica'" >Search song</router-link>
    <!-- <button
      v-on:click="searchSong(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    > 
      Search song
    </button> -->
    <button
      v-on:click="searchArtist(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search artist
    </button>
  </div>
  <router-view />
  <!-- <SongResult /> -->
  <MediaController />
</template>

<script>
import MediaController from "./components/MediaController.vue";
import Search from "./components/Search.vue";
import SongResult from "./components/SongResult.vue";

export default {
  mounted(){
    console.log(this.$route.params.id)
  },
  components: {
    MediaController,
    Search,
    SongResult,
  },
  methods: {
    async searchArtist(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/artists/" + searchFor
      );
      this.$store.commit("setSearchArtist", await rawResponse.json());
      console.log(this.$store.state.searchResultArtist);
    },
    async searchSong(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/songs/" + searchFor
      );
      this.$store.commit("setSearchSong", await rawResponse.json());
      console.log(this.$store.state.searchResultSong);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
