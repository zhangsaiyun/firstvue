<template>
  <div class="">
    <h2>组件注册</h2>

    <h5>
      （1）组件名<br/>
      定义组件名的方法有两种：<br/>
      1.kebab-case（短横线分隔命名），引用时也必须使用kebab-case<br/>
      2.PascalCase（首字母大写命名），引用时可kabab-case，也可PascalCase
    </h5>

    <h5>
      （2）全局组件<br/>
      Vue.component('component-a', { /* ... */ })，定义在新建实例之前
    </h5>

    <h5>
      （3）局部组件<br/>
      全局组件往往是不够理想的。比如你使用一个像 webpack 这样的构建工具，全局注册所有的组件即便你已经不再是一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载 Javascript 的无谓的增加。
    </h5>

    <h5>
      （4）模块系统<br/>
      1.在模块系统中局部注册<br/>
      在这些情况下，推荐创建一个 components 目录，并将每个组件放置在其各自的文件中。<br/>
      2.基础组件的自动化全局注册<br/>
      基础组件：相对通用的，会在各个组件中频繁用到的
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
