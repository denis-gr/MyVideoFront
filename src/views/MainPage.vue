<script setup>
</script>

<template>


<main class="container">
    <div class="row g-3 m-3" v-if="videos.length">
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
    <div v-else>
      <h3>К сожалению здесь пусто</h3> 
    </div>
</main>




</template>

<style>

</style>


<script>

export default {
  data() {
    return { videos: [] };
  },
  async created() {
    const response = await fetch("/api/videos.json");
    this.videos = await response.json();
  },
  methods: {
    get_url: (url) => "/" + (url || "///").split("/").slice(3).join("/"),
  },
};
</script>