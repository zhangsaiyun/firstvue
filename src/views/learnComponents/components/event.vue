<template>
  <div class="">
    <h2>自定义事件</h2>

    <h5>
      （1）事件名<br/>
      推荐始终使用 kebab-case 的事件名<br/>
      <my-component @my-event="doSomething"></my-component>
    </h5>

    <h5>
      （2）自定义组件的model<br/>
      一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件<br/>
      例如：<base-text v-model="searchText"></base-text><span>searchText: {{ searchText }}</span><br/>
      但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：<br/>
      例如：<base-checkbox v-model="lovingVue"></base-checkbox><span>lovingVue: {{ lovingVue }}</span>
    </h5>

    <h5>
      （3）将原生事件绑定到组件<br/>
      例如：<base-text v-model="searchText" @focus.native="onFocus"></base-text><br/>
      $listeners 配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。<br/>
      <base-input label="哈哈哈" :value="searchText2" @focus="onFocus"></base-input>
    </h5>

    <h5>
      （4）.sync修饰符
      <text-document v-bind.sync="doc"></text-document>
      注意：.sync 修饰符的 v-bind 不能和表达式一起使用
    </h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lovingVue: true,
      searchText: '',
      searchText2: '',
      doc: {
        index: 0,
        title: '111'
      },
      valueChild: true
    }
  },
  components: {
    MyComponent: {
      props: ['my-event'],
      methods: {
        handle () {
          this.$emit('my-event')
        }
      },
      template: "<div @click='handle'>我的组件</div>"
    },
    'base-text': {
      props: ['searchText'],
      template: `
        <input
          type="text"
          :value="searchText"
          @input="$emit('input', $event.target.value)"
        />
      `
    },
    'base-checkbox': {
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      },
      template: `
        <input
          type="checkbox"
          v-bind:checked="checked"
          v-on:change="$emit('change', $event.target.checked)"
        >
      `
    },
    'base-input': {
      // 是否希望组件的根元素继承特性
      inheritAttrs: false,
      props: ['label', 'value'],
      computed: {
        inputListeners: function () {
          var vm = this
          // `Object.assign` 将所有的对象合并为一个新对象
          return Object.assign({},
            // 我们从父级添加所有的监听器
            this.$listeners,
            // 然后我们添加自定义监听器，
            // 或覆写一些监听器的行为
            {
              // 这里确保组件配合 `v-model` 的工作
              input: function (event) {
                vm.$emit('input', event.target.value)
              }
            }
          )
        }
      },
      template: `
        <label>
          {{ label }}
          <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
          >
        </label>
      `
    },
    'text-document': {
      props: {
        index: Number,
        title: String
      },
      methods: {
        handle () {
          this.$emit('update:title', '222')
          this.$emit('update:index', 2)
        }
      },
      template: "<div @click='handle'>index: {{ index }}, title: {{ title }}</div>"
    }
  },
  mounted () {

  },
  methods: {
    doSomething () {
      console.log('doSomething...')
    },

    handleInput (val) {
      console.log('val: ', val)
    },

    onFocus () {
      console.log('focus')
    }
  }
}
</script>

<style scoped lang="less">

</style>
