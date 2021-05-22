<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-18 16:17:07
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-18 16:27:17
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Parent/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Parent from './pages/Parent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
