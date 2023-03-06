<script setup>
</script>

<template>


<main class="container">
    <div class="row g-3 m-3">
        <div class="col-sm-6" v-for="video in videos">
            <a :href="`/video#id:${video.id}:`" class="card text-decoration-none text-muted">
                <img :src="get_url(video.image)" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title" v-text="video.title"></h5>
                    <p class="card-text" v-text="video.description"></p>
                </div>
              </a>
        </div>
    </div>
</main>




</template>

<style>

</style>


<script>
const backendDomain = "8000-denisgr-myvideo-x5gkonzz9sw.ws-eu89.gitpod.io";

export default {
  data() {
    return { videos: [] }
  },
  async created() {
    const url = "https://" + backendDomain + "/api/videos.json"
    const response = await fetch(url)
    this.videos = await response.json()
  },
  methods: {
    get_url: (url) => "https://" + backendDomain + "/" + (url || "///").split("/").slice(3).join("/"),
  },
}
</script>