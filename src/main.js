// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//bootstrap
import BootstrapVue from 'bootstrap-vue'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// fontawsome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faQuestion, faUser, faBook, faSearch, faCaretLeft, faCaretRight, faBars, faQuestionCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faUser, faBook, faQuestion, faSearch, faQuestionCircle, faCaretLeft, faCaretRight,faBars, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
