// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import App from './App'
import router from './router'
import Mixin from './mixins'

Vue.mixin(Mixin)
Vue.use(ElementUI)
Vue.use(less)
/* 阻止启动生产消息，常用作指令。 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
