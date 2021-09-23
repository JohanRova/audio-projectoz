<template>
<Search/>
<router-view/>
<SongResult/>
<MediaController/>
</template>

<script>
import MediaController from "./components/MediaController.vue";
import Search from "./components/Search.vue"
import SongResult from "./components/SongResult.vue"

export default {
  components:{
    MediaController,
    Search,
    SongResult,
  },
  methods:
  {
  },
}

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
