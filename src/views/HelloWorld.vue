<template>
  <div class="hello">
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
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '/',
      menuList: [
        { title: '首页', url: '/' },
        { title: '玩耍中心', url: '/helloPerson' },
        { title: '可复用性&组合', url: '/reusability' },
        { title: '消息中心', url: '/', disabled: true }
      ]
    }
  },
  methods: {
    onJump (url) {
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
