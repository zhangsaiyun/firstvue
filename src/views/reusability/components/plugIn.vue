<template>
  <div class="">
    <h2>插件</h2>

    <h5>
      （1）插件的功能范围（插件通常是用来为vue添加全局功能）<br/>
      1.添加全局方法或者property<br/>
      2.添加全局资源：指令/过滤器/过渡等<br/>
      3.通过全局混入来添加一些组件选项<br/>
      4.添加Vue实例方法，通过把它们添加到Vue.prototype上实现<br/>
      5.一个库，提供自己的API，同时提供上面提到的一个或者多个功能
    </h5>

    <h5>
      （2）使用插件<br/>
      通过全局方法 Vue.use() 使用插件，且在调用 new Vue() 启动应用之前。<br/>
      可传入一个可选的选项对象。Vue.use(Myplugin, { someOption: true })<br/>
      Vue.use 会自动阻止多次注册相同插件，即使多次调用也只会注册一次。
    </h5>

    <h5>
      （3）开发插件<br/>
      Vue.js的插件应该暴露一个 install 方法，这个方法第一个参数是 Vue 构造器，第二个参数是可选的选项对象。<br/>
      Myplugin.install = function (Vue, options) {}
    </h5>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
