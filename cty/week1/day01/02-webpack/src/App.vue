<template>
  <div>
    hello world
    我是模板
    <h1>11111</h1>
    <img :src="url" alt="">
  </div>
</template>

<script>
import img from './assets/logo.png'
export default {
  data(){
    return {
      url : img
    }
  }
}
</script>

<style>

</style>