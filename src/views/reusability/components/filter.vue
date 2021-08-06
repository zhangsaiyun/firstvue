<template>
  <div class="">
    <h2>过滤器</h2>

    <h5>
      （1）过滤器可以用在两个地方：双花括号插值和 v-bind 表达式后(后者从2.1.0+才开始支持)<br/>
      过滤器应被添加在表达式尾部，用管道符号指示
    </h5>
    <div>{{ message | capitalize  }}</div>
    <div v-bind:id="rawId | formatId"></div>

    <h5>
      （2）全局过滤器要在创建 Vue 实例之前<br/>
      局部过滤器和全局过滤器重名时，会采用局部过滤器。
    </h5>

    <h5>
      （3）过滤器可以串联
    </h5>
    <div>{{ message | filterA | filterB }}</div>

    <h5>
      （4）过滤器是 Javascript 函数，因此可以接收参数
    </h5>
    <div>{{ message | filterC(true, false) }}</div>
    <div>// 这里filterC接收三个参数，参数一是message值，参数二是true，参数三是false</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'heLLo',
      rawId: '001'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1) + '111'
    },
    formatId: function (value) {
      return Number(value)
    },
    filterA (value) {
      return (value || '') + 'aaa'
    },
    filterB (value) {
      return (value || '') + 'bbb'
    },
    filterC (value, arg1, arg2) {
      return (value || '') + arg1 + arg2
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
