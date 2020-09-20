<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content">
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control class="tab-bar-control" :titles="titles" @tabClick="tabBarClick"/>
      <goods-list :goods-list="showGoods"/>
    </scroll>
  </div>
</template>

<script>
  //业务相关组件
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "views/home/childComps/HomeFeature";
  //公共组件
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/context/tabControl/TabControl";
  import GoodsList from "components/context/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  //方法
  import {getHomeMultiData, getHomeGoods} from "network/homeAPI";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ["流行", "新款", "精选"],
        goods: {
          "pop": { page: 0, list: [] },
          "new": { page: 0, list: [] },
          "sell": { page: 0, list: [] }
        },
        goodsList: [
          "pop", "new", "sell"
        ],
        goodsType: "pop"
      }
    },
    created() { //使用created声明周期函数，组件一旦创建好后就发送网络请求
      this.homeMultiData();
      this.homeGoods("pop");
      this.homeGoods("new");
      this.homeGoods("sell");
    },
    computed: {
      showGoods() {
        return this.goods[this.goodsType].list
      }
    },
    methods: {
      // 事件监听相关方法
      tabBarClick(index) {
        this.goodsType = this.goodsList[index]
      },
      // 网络请求相关方法
      homeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      homeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh; /*100个视口高度*/
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-bar-control {
    position: sticky; /*对该组件实现吸顶效果*/
    top: 44px;  /*吸顶时上间距为44px*/
    z-index: 9;
  }

  .content {
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 47px;
    left: 0;
    right: 0;
  }
</style>
