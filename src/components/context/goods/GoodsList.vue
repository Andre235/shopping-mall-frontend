<template>
  <div>
    <goods-item v-for="item in goodsList" :goods-info="item"/>
  </div>
</template>

<script>
  import GoodsItem from "components/context/goods/GoodsItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {return []}
      }
    }
  }
</script>

<style scoped>

</style>
