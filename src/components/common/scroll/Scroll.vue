<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // probeType: 2, //实时监听滚动位置
        // pullUpLoad: true //开启上拉加载更多功能
      })
    }
  }
</script>

<style scoped>

</style>
