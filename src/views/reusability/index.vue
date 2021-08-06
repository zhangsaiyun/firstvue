<template>
  <div class="reusability">
    <mixin></mixin>
    <custom-instruction></custom-instruction>
    <render-and-jsx></render-and-jsx>
    <plug-in></plug-in>
    <filter-method></filter-method>
  </div>
</template>

<script>
import Mixin from './components/mixin'
import CustomInstruction from './components/customInstruction'
import RenderAndJsx from './components/renderAndJsx'
import PlugIn from './components/plugIn'
import FilterMethod from './components/filter'
export default {
  name: 'Reusability',
  components: {
    Mixin,
    CustomInstruction,
    RenderAndJsx,
    PlugIn,
    FilterMethod
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
