<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex; /*横向平铺*/
    background: #f6f6f6;

    position: fixed; /*导航栏位置设置在屏幕底部*/
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
