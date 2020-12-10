import Vue from 'vue'
import App from './App.vue'

import ImageHover from '../src'
Vue.component('image-hover', ImageHover)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
