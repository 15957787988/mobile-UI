// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MUI from '../packages/index'
import demoBlock from './components/demo-block.vue'
import '../packages/theme/lib/index.css'

Vue.component('demo-block', demoBlock)
Vue.use(MUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
