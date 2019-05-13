<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/containers/Header/Header'
export default {
  name: 'App',
  components: {
   AppHeader
  }
}
</script>
<style lang="scss">
@import './stylesheets/_comment.scss';
@import './stylesheets/_reset.scss';

#app{
  width: 100%;
  height: 100%;
}
</style>
