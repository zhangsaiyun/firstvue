<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.url"
        :disabled="item.disabled ? true : false"
      >{{ item.title }}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/',
      menuList: [
        { title: '首页', url: '/' },
        { title: '基础', url: '/basics' },
        { title: '深入了解组件', url: '/learnComponents' },
        { title: '可复用性&组合', url: '/reusability' },
        { title: '消息中心', url: '/', disabled: true }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
