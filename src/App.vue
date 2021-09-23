<template>
<router-view/>
<MediaController/>
</template>

<script>
import MediaController from "./components/MediaController.vue";

export default {
  components:{
    MediaController
  }
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
