<template>
  <div class="reusability">
    <mixin></mixin>
    <custom-instruction></custom-instruction>
  </div>
</template>

<script>
import CustomInstruction from './components/customInstruction.vue'
import Mixin from './components/Mixin'
export default {
  name: 'Reusability',
  components: {
    Mixin,
    CustomInstruction
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
