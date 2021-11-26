import Vue from 'vue'
import App from './App.vue'
import "@fontsource/outfit";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/playfair-display";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
