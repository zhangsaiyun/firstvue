<template>
  <div class="custom-instruction">
    <h2>自定义指令</h2>
    <h5>
      使用场景：对普通DOM进行底层操作<br/>
      举例：input实现自动聚焦
    </h5>
    <input v-focus/>
    <h5>
      钩子函数：bind、inserted、update、componentUpdated、unbind
    </h5>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  directives: {
    focus: {
      bind () {
        console.log('bind')
      },
      // 指令的定义
      inserted (el) {
        el.focus()
        console.log('inserted')
      },
      update () {
        console.log('update')
      },
      componentUpdated () {
        console.log('componentUpdated')
      },
      unbind () {
        console.log('unbind')
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
