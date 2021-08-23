<template>
  <div class="">
    <register></register>
    <prop></prop>
    <event></event>
    <slot-component></slot-component>
    <dynamic></dynamic>

    <h2>HTML字符实体</h2>
    <el-table :data="charDataList">
      <el-table-column
        label="字符名称"
        prop="name"
        align="center"
      ></el-table-column>
      <el-table-column
        label="显示结果"
        prop="result"
        align="center"
      ></el-table-column>
      <el-table-column
        label="描述"
        prop="des"
        align="center"
      ></el-table-column>
    </el-table>
    <a href="https://www.w3school.com.cn/html/html_entities.asp">HTML字符实体链接</a>
  </div>
</template>

<script>
import Register from './components/ceshi.vue'
import Prop from './components/prop.vue'
import Event from './components/event.vue'
import SlotComponent from './components/slot.vue'
import Dynamic from './components/dynamic.vue'
export default {
  data () {
    return {
      charDataList: [
        { name: '&nbsp;', result: ' ', des: '空格' },
        { name: '&lt;', result: '<', des: '小于号' },
        { name: '&gt;', result: '>', des: '大于号' },
        { name: '&amp;', result: '&', des: '和号' },
        { name: '&quot;', result: '"', des: '引号' }
      ]
    }
  },
  components: {
    Register,
    Prop,
    Event,
    SlotComponent,
    Dynamic
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
