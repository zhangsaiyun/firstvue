<template>
  <div class="mixin">
    <h2>混入(mixin) 分发组件的可复用功能</h2>
    <h5>
      一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。<br/>
      console:&nbsp;&nbsp;hello from mixin!
    </h5>
    <h5>
      选项合并 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。（比如数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。）<br/>
      console:&nbsp;&nbsp;{ message: "goodbye", foo: "abc", bar: "def" }
    </h5>
    <h5>
      同名钩子函数将合并为一个数组，因此都将被调用。（混入对象的钩子先执行。）<br/>
      console:&nbsp;&nbsp;hello from mixin!<br/>
      console:&nbsp;&nbsp;{ message: "goodbye", foo: "abc", bar: "def" }
    </h5>
    <h5>
      值为对象的选项，例如 methods、components 和 directives，将被合并成为同一个对象。（两个对象键名冲突时，取组件对象的键值对。）<br/>
      console:&nbsp;&nbsp;from self
    </h5>
    <h5 @click="loadPage('HelloPerson')">全局混入</h5>
    <h5>自定义选项合并策略</h5>
  </div>
</template>

<script>
// 定义一个混入对象
var myMixin = {
  data () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}
export default {
  name: 'Mixin',
  mixins: [myMixin],
  data () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created () {
    console.log(this.$data)
  },
  mounted () {
    this.conflicting()
  },
  methods: {
    conflicting: function () {
      console.log('from self')
    }
  }
}
</script>
