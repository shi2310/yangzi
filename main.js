import Vue from 'vue'
import App from './App'
import store from './store'
import pageHead from './components/page-head.vue'

App.mpType = 'app'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)

const app = new Vue({
    ...App,
	store
})
app.$mount()
