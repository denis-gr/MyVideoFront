
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "video.js";
import "video.js/dist/video.min.js";
import "video.js/dist/video-js.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';



const app = createApp(App);

app.use(router);

app.mount('#app');
