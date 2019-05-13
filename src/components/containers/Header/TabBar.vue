<template>
  <div class="app-header-tabbar">
    <div class="tabbar-left">
      <div @click="toggleNav" class="nav-btn" ><i class="fa fa-navicon"></i></div>
      <div class="nav-title">卖座电影</div>
    </div>
    <div class="tabbar-right">
      <div class="nav-city">北京</div>
      <div class="nav-user"><i class="fa fa-user"></i></div>
    </div>
    <div @click="toggleNav" v-if="isNavShow" class="mask"  ></div>
  </div>

</template>
<script>
export default {
  name: 'app-header-tabbar',
  props:['isNavShow','toggleNav']
}
</script>
<style lang='scss'>
$base-color : red;
.app-header-tabbar{
  background: $base-color;
}
.app-header-tabbar{
  background: #282828;
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  left: 0;
  width: auto;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .tabbar-left, .tabbar-right{
    display: flex;
    align-items: center;
  }
  .nav-btn{
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;
  }
  .nav-title{
    padding: 0 1em;
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: normal;
    display: inline-block;
    overflow: hidden;
  }
  .nav-city{
    font-size: 14px;
    padding: 0 6px;
  }
  .nav-user{
    font-size: 16px;
    width: 48px;
    text-align: center;
    color: #999;
  }
}

</style>



