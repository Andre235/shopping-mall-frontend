<template>
  <div class="goods" >
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
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
