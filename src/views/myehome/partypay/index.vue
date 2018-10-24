<template>
    <div class="main">
      <div class="header">
        <Header :title="title" ></Header>
      </div>
    </div>
</template>
<script>
  import  Header from '../../../components/header/tzheader'
    export default {
        name: "dfjiaona",
      components:{
          Header
      },
      data(){
          return{
            title:'党费缴纳'
          }
      },
    }
</script>

<style scoped>

</style>
