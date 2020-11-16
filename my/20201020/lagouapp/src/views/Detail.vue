<template>
  <div>
    <h1>detail {{postId}}</h1>
      
  </div>
</template>

<script>
export default { 
  props : ['postId'],
  data(){
    return {
      detail_list : []
    }
  },
  mounted(){
    this.$axios.get('/api/detail' , {
      params : {postId : this.postId}
    }).then((res) => {
      console.log(res.data);
      this.detail_list = res.data.detail
    })  
  }
}
</script>

<style>

</style>