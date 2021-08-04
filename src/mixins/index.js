// 全局mixin
export default {
  data () {
    return {}
  },
  methods: {
    loadPage (routerName, param) {
      if (param) {
        this.$router.push({ name: routerName, query: param })
      } else {
        this.$router.push({ name: routerName })
      }
    }
  }
}
