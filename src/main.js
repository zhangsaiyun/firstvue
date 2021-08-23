// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import App from './App'
import router from './router'
import Mixin from './mixins'
import VueI18n from 'vue-i18n'

Vue.mixin(Mixin)
Vue.use(ElementUI)
Vue.use(less)
/* 阻止启动生产消息，常用作指令。 */
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('languageSet') || 'zh', // 从localStorage里获取用户中英文选择，没有则默认中文
  messages: {
    'zh': require('./components/language/zh'),
    'en': require('./components/language/en')
  }
})
/* 全局组件 */
Vue.component('blog-post', {
  props: ['postTitle', 'post', 'id'],
  template: '<h3>{{ postTitle }}</h3>',
  mounted () {
    // console.log('postTitle: ', this.postTitle)
    // console.log('post: ', this.post)
    // console.log('id: ', this.id)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
