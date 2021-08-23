<template>
  <div class="hello">
    <div>{{$t('user.login')}}</div>
    <div>{{$t('user.register')}}</div>
    <div>{{$t('user.loginUsername')}}</div>
    <div>
      <el-button type="primary" @click="changeLanguage">{{$t('language.name')}}</el-button>
    </div>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    changeLanguage () {
      this.$i18n.locale = (this.$i18n.locale === 'zh' ? 'en' : 'zh')
      localStorage.setItem('languageSet', this.$i18n.locale)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    line-height: 30px;
    font-size: 14px;
    padding-top: 15px;
  }
</style>
