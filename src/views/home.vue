<template>
  <h1 style="position: absolute; top: 0; width: 100%">Musicalez</h1>

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
    <button
      v-on:click="searchSong(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search song
    </button>
    <button
      v-on:click="searchArtist(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search artist
    </button>

    <!-- <div>
      <button @click="play('DXxeOvvNNwc')">The Black Page #1 on piano</button>
      <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
      <button @click="pause()">Pause</button>
    </div> -->
    
    <!-- SEARCH ALBUM IS REMOVED SINCE IT WAS REMOVED FROM THE REQUIREMENTS LIST
    <button
      v-on:click="searchAlbum(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search album
    </button> -->
  </div>

  <!--search results song etc.-->
  <template v-if="this.$store.state.searchSongBool === true">
    <div class="d-inline-flex" style="margin-top:2vh">
      <ol
        id="array-rendering"
        class="list-group"
        style="width: 95vw; margin-bottom: 15vw"
      >
        <li
          class="list-group-item d-flex flex-column"
          v-for="item in this.$store.state.searchResultSong.content"
          v-bind:key="item.id"
        >
          <div class="d-flex flex-row justify-content-between">
            <button
              v-on:click="play(item.videoId)"
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
          </div>
        </li>
      </ol>
    </div>
  </template>
  <template v-else-if="this.$store.state.searchArtistBool === true">
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
          </div>
        </li>
      </ol>
    </div>
  </template>

  <!--media controller below-->
  <div class="fixed-bottom border border-4 bg-info" style="height: 15vh">
    <div>
      <div class="d-flex justify-content-center" style="padding-top: 1vh">
        <button
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
  data() {
    return {
      searchterm: "asdlol",
      items: [{ message: "foo" }, { message: "bar" }],
      searchResult: [],
    };
  },
  methods: {
    async searchArtist(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/artists/" + searchFor
      );
      this.$store.commit("setSearchArtist", await rawResponse.json());
      console.log(this.$store.state.searchResultArtist)
    },
    async searchSong(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/songs/" + searchFor
      );
      this.$store.commit("setSearchSong", await rawResponse.json());
      console.log(this.$store.state.searchResultSong);
    },
    async searchAlbum(searchFor) {
      console.log(searchFor);
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/search/" + searchFor
      );
      console.log(await rawResponse.json());
    },
    play(id){
      console.log(id)
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    playAgain()
    {
      window.player.playVideo()
    }
  },
};
</script>