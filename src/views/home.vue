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
  <h1>searchterm is {{ searchterm }}</h1>

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
    <button
      v-on:click="searchAlbum(searchterm)"
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search album
    </button>
  </div>

  <div class="fixed-bottom border border-4" style="height: 15vh">
    <div>
      <div class="d-flex justify-content-center" style="padding-top:1vh">
        <button type="button" class="btn btn-outline-primary mx-1" style="display:flex;">
          <img src="/src/icons/skip-backward.svg"/>
        </button>
        <button type="button" class="btn btn-outline-primary mx-1" style="display:flex;">
          <img src="/src/icons/play.svg"/>
        </button>
        <button type="button" class="btn btn-outline-primary mx-1" style="display:flex">
          <img src="/src/icons/pause.svg"/>
        </button>
        <button type="button" class="btn btn-outline-primary mx-1" style="display:flex;">
          <img src="/src/icons/skip-forward.svg"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {searchterm: "asdlol"}
  },
  methods:{
    async searchArtist(searchFor){
      console.log(searchFor)
      let rawResponse = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + searchFor)
      console.log(await rawResponse.json())
    },
    async searchSong(searchFor){
      console.log(searchFor)
      let rawResponse = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchFor)
      console.log(await rawResponse.json())
    },
      async searchAlbum(searchFor){
      console.log(searchFor)
      let rawResponse = await fetch('https://yt-music-api.herokuapp.com/api/yt/search/' + searchFor)
      console.log(await rawResponse.json())
    },
  }

}
</script>