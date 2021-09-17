<template>
  <h1 style="position: absolute; top: 0; width: 100%">Musicalez</h1>

  <div class="input-group mb-3" style="padding-left: 3vw; padding-right: 3vw">
    <div class="input-group-prepend"></div>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </div>

  <div class="d-flex flex-row justify-content-center">
    <button
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search song
    </button>
    <button
      type="button"
      class="btn btn-primary"
      style="margin-left: 0.5vw; margin-right: 0.5vw"
    >
      Search artist
    </button>
    <button
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
    
  },
  methods:{
    async searchArtist(){
      let rawResponse = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/metallica')
      console.log(await rawResponse.json())
    }
  }

}
</script>