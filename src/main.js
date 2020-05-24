import Vue from 'vue'
import App from './App'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'
import './assets/sass/font.scss'

Vue.config.productionTip = false
Vue.use(VueObserveVisibility)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
