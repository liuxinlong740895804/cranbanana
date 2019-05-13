<template>
  <header class="app-header">
    <tab-bar :isNavShow = "isNavShow" :toggleNav ="toggleNav"></tab-bar>
    <tab-nav :isNavShow = "isNavShow" :toggleNav ="toggleNav"></tab-nav>
  </header>

</template>
<script>
import TabBar from './TabBar';
import TabNav from './Nav';
export default {
  name: 'app-header',
  data(){
    return {
      isNavShow: false
    }
  },
  methods:{
    toggleNav(){
      this.isNavShow = !this.isNavShow
    }
  },
  components:{
    TabBar,
    TabNav
  }
}
</script>
<style lang="scss">
// .app-header{
//   width: 100%;
//   height: 100%;
// }

</style>
