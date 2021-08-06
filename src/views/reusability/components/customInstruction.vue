<template>
  <div class="custom-instruction">
    <h2>自定义指令</h2>
    <h5>
      （1）使用场景：对普通DOM进行底层操作<br/>
      举例：input实现自动聚焦
    </h5>
    <input v-focus/>

    <h5>
      （2）钩子函数：bind、inserted、update、componentUpdated、unbind
    </h5>

    <h5>
      （3）钩子函数参数：<br/>
      el：指令所绑定的元素，可以直接用来操作dom<br/>
      binding：一个对象，包含name、value、oldValue、expression、arg、modifiers<br/>
      vnode：Vue编译生成的虚拟节点<br/>
      oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中使用<br/>
      注：除el之外，其他参数只读，不可修改。
    </h5>
    <div v-demo:foo.a.b="message"></div>

    <h5>
      （4）动态指令参数<br/>
      指令的参数是可以动态的。例如，在 v-mydirective:[argument] = 'value'中，argument参数可以根据组件实例数据进行更新
    </h5>
    <div id="dynamicexample" style="position: relative;">
      <h3>Scroll down inside this section ↓</h3>
      <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
    </div>

    <h5>
      （5）函数简写<br/>
      在很多时候，你可能想 bind 和 update 时触发相同行为，而不关心其他钩子。
    </h5>
    <div v-color-swatch="'pink'">111</div>

    <h5>
      （6）对象字面量<br/>
      如果指令需要多个值，可以传入一个 Javascript 对象字面量。（指令函数能够接收所有合法的 Javascript 表达式）
    </h5>
    <div v-demo2="{ color: 'white', text: 'hello!' }"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello',
      direction: 'left'
    }
  },
  directives: {
    focus: {
      bind () {
        // console.log('bind')
      },
      // 指令的定义
      inserted (el) {
        el.focus()
        // console.log('inserted')
      },
      update () {
        // console.log('update')
      },
      componentUpdated () {
        // console.log('componentUpdated')
      },
      unbind () {
        // console.log('unbind')
      }
    },
    demo: {
      bind (el, binding, vnode, oldVnode) {
        var s = JSON.stringify
        el.innerHTML =
        'name: ' + s(binding.name) + '<br>' +
        'value: ' + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: ' + s(binding.arg) + '<br>' +
        'modifiers: ' + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    },
    pin: {
      bind (el, binding, vnode, oldVnode) {
        el.style.position = 'absolute'
        var s = (binding.arg === 'left' ? 'left' : 'right')
        el.style[s] = binding.value + 'px'
        el.style.top = 0
      }
    },
    'color-swatch' (el, binding) {
      el.style.backgroundColor = binding.value
    },
    demo2: {
      bind (el, binding) {
        // console.log(binding.value.color)
        // console.log(binding.value.text)
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
