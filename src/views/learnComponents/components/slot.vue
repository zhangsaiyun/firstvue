<template>
  <div class="">
    <h2>插槽</h2>

    <h5>
      （1）插槽内容<br/>
      &lt;slot&gt;承载内容分发的出口<br/>
      插槽内可以包含任何模板代码，包含HTML，甚至其他的组件。<br/>
      但是如果组件中间没有包含一个 &lt;slot&gt; 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。
    </h5>

    <h5>
      （2）编辑作用域<br/>
      父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
    </h5>

    <h5>
      （3）后备内容<br/>
      <custom-button></custom-button>
      <custom-button>Save</custom-button>
    </h5>

    <h5>
      （4）具名插槽<br/>
      一个不带 name 的 &lt;slot&gt; 出口会带有隐含的名字“default”。<br/>
      注意：v-slot 只能添加在 &lt;template&gt; 上 (只有一种例外情况)
      <base-layout>
        <template v-slot:header>
          <h3>Here might be a page title</h3>
        </template>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
    </h5>

    <h5>
      （5）插槽作用域
      <current-user>
        <template v-slot:default="slotProps">
          {{ slotProps.user.firstName }}
        </template>
      </current-user>
    </h5>

    <h5>
      （6）动态插槽名
    </h5>

    <h5>
      （7）具名插槽的缩写
      <base-layout>
        <template #header>
          <h3>Here might be a page title</h3>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
      使用缩写的时候，必须明确插槽名
      <current-user #default="{ user }">
        {{ user.firstName }}
      </current-user>
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
    'custom-button': {
      template: `
        <el-button type="text">
          <slot>Submit</slot>
        </el-button>
      `
    },
    'base-layout': {
      template: `
        <div>
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      `
    },
    'current-user': {
      data () {
        return {
          user: {
            firstName: '小明',
            lastName: '小丽'
          }
        }
      },
      template: `
        <span>
          <slot v-bind:user="user">
            {{ user.lastName }}
          </slot>
        </span>
      `
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
