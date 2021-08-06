<template>
  <div class="render-and-jsx">
    <h2>渲染函数&amp;JSX</h2>

    <h5>
      （1）基础<br/>
      vue推荐绝大多数情况下使用模板创建HTML。然而在一些场景中，你真的需要 Javascript 的完全编译能力，这时你可以用 render 函数，它比模板更接近编译器。<br/>
    </h5>
    <anchored-heading :level="6">hello world!</anchored-heading>

    <h5>
      （2）节点、树以及虚拟DOM<br/>
      “虚拟节点(virtual node)”：简称VNode。<br/>
      “虚拟DOM”：对由Vue组件树建立起来的整个 VNode 树的称呼。
    </h5>

    <h5>
      （3）createElement参数
    </h5>

    <h5>
      （4）使用Javascript代替模板功能
    </h5>

    <h5>
      （5）JSX
    </h5>

    <h5>
      （6）函数式组件
    </h5>

    <h5>
      （7）模板编译
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
    'anchoredHeading': {
      render: function (createElement) {
        return createElement(
          'h' + this.level, // 标签名称
          this.$slots.default // 子节点数组
        )
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
