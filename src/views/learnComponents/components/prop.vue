<template>
  <div class="">
    <h2>Prop</h2>

    <h5>
      （1）Prop的大小写<br/>
      全局组件限制：HTML 的 attribute 名是大小写不敏感的，所以浏览器会把大写字符解释成小写字符。那么你在使用DOM模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名
      <blog-post post-title="hello!"></blog-post>
      注：如果使用字符串模板，则没有这个限制。
    </h5>

    <h5>
      （2）Prop类型<br/>
      String、Number、Boolean、Array、Object、Function、Promise
    </h5>

    <h5>
      （3）传递静态或动态Prop
      <blog-post post-title="hello!" v-bind="post" v-bind:id="post.a"></blog-post>
    </h5>

    <h5>
      （4）单向数据流<br/>
      父子组件之间形成一个单向下行绑定。这会防止子组件意外改变父组件的状态，从而导致数据流难以理解。
    </h5>

    <h5>
      （5）Prop验证<br/>
      当 prop 验证失败的时候，（开发环境构建版本的）vue将会产生一个控制台的警告<br/>
      注：prop会在组件实例创建之前进行验证，所以实例的property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
      <my-component propC="111" :author="person"></my-component>
    </h5>

    <h5>
      （6）非 Prop 的 Attribute
      <my-component propC="111" propF="222"></my-component>
    </h5>
  </div>
</template>

<script>
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
export default {
  data () {
    return {
      post: {
        a: 1,
        b: 2
      },
      person: new Person('111', '222')
    }
  },
  components: {
    'my-component': {
      props: {
        // 基础的类型检查（null 和 undefined 会通过任何类型校验）
        propA: Number,
        propB: [String, Number],
        propC: {
          type: String,
          required: true,
          default: 100
        },
        // 默认值为数组或对象，则必须从工厂函数获取
        propD: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义校验函数
        propE: {
          validator: function (val) {
            return ['message', 'warning', 'danger'].indexOf(val) !== -1
          }
        },
        author: Person
      },
      template: `<div>---我的组件---</div>`,
      mounted () {
        // console.log(11111, this.author)
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
