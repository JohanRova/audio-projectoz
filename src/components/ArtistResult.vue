<template>
  <div class="d-inline-flex" style="margin-top: 2vh">
    <ol
      id="array-rendering"
      class="list-group"
      style="width: 95vw; margin-bottom: 15vw"
    >
    <p class="border border">You searched for: {{ this.$route.params.artistId }}</p>
      <li
        class="list-group-item d-flex flex-column"
        v-for="item in this.$store.state.searchResultArtist.content"
        v-bind:key="item.id"
      >
        <div class="d-flex flex-row justify-content-center">
          <div class="p-2 border border-primary rounded mx-2 w-50">
            {{ item.name }}
          </div>
          <router-link tag="button" class="btn btn-outline-primary mx-1 p-2 text-dark" :to="'/song' + '/' + item.name" >Search songs</router-link>
          <button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
            data-bs-custom-class="border"
            v-on:click="copyShareLink(item.browseId, 'artist')"
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
  mounted() {
    this.searchArtist(this.$route.params.artistId);
  },
  methods: {
    async searchArtist(searchFor) {
      let rawResponse = await fetch(
        "https://yt-music-api.herokuapp.com/api/yt/artists/" + searchFor
      );
      this.$store.commit("setSearchArtist", await rawResponse.json());
      console.log(this.$store.state.searchResultArtist);
    },
    copyShareLink(videoId, shareType) {
      navigator.clipboard.writeText(
        "localhost:3000/" + shareType + "/" + videoId
      );
    },
    logsomeshit(string) {
      console.log(string);
    },
  },
};
</script>