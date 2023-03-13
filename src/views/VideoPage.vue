<script setup>
</script>

<template>


<main class="container">
    <div class="row">
        <div class="col-md-9">
            <video class="video-js vjs-16-9 my-3" autoplay controls preload="metadata" :src="get_url(video['video_' + quality])"
    data-setup="{}"></video>
            <div class="my-3 input-group flex-nowrap">
              <span class="input-group-text">Качество: </span>
              <select v-model="quality" class="form-select" aria-label="Default select example">
                <option value="original" selected>
                   <span>Оригинал:</span>
                   <span v-text="video.original_width"></span>
                   <span>x</span>
                   <span v-text="video.original_height"></span>
                </option>
                <option value="360" v-if="video.video_360">360</option>
                <option value="480" v-if="video.video_480">480</option>
                <option value="720" v-if="video.video_720">720</option>
                <option value="1080" v-if="video.video_1080">1080</option>
              </select>
              <a @click="setUrlWithTime" class="btn btn-secondary">Сохранить время</a>
            </div>
            <h1 class="my-1 h3" v-text="video.title"></h1>
            <div class="my-1" v-text="video.description"></div>
            <div class="small">
              <span>Добавленно: </span>
              <span v-text="formatDate(video.first_published_at)"></span>
            </div>
        </div>
        <div class="col-md-3">
            <a :href="`/video#id:${video.id}:`" class="card text-decoration-none text-muted my-3 rounded-0" v-for="video in videos">
                <img :src="get_url(video.image)" class="card-img-top  rounded-0">
                <div class="card-body">
                    <span class="card-title" v-text="video.title"></span>
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
export default {
  data() {
    return { 
        allvideos: [],
        video: {},
        quality: "original",
    }
  },
  async created() {
    await this.load();
    window.addEventListener('hashchange', () => this.load());
    this.setTime();
  },
  methods: {
    get_url: (url) => "/" + (url || "///").split("/").slice(3).join("/"),
    formatDate: date => new Date(date).toLocaleString(),
    load: async function() {
      const videoId = document.location.hash.match(/id:(\d*):/)[1];
      const response = await fetch("/api/videos.json")
      this.allvideos = await response.json();
      const response2 = await fetch(`/api/videos/${videoId}.json`);
      this.video = await response2.json();
    },
    setUrlWithTime() {
      const time = Math.floor(document.querySelector("video").currentTime);
      document.location = `/video#id:${this.video.id}:time:${time}:`;
    },
    setTime() {
      const time = (document.location.hash.match(/time:(\d*):/)||[0, 0])[1];
      document.querySelector("video").currentTime = time;
    },
  },
  computed: {
    videos: vm => vm.allvideos.filter(i => i.id != vm.video.id).slice(0, 4),
  },
}
</script>