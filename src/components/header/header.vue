<template>
    <div class="header-wrap">
      <a @click="handleLogin" v-if="!$store.state.token">登录</a>
      <a v-else></a>
      <img src="../../img/logo.png" alt="">
    </div>

</template>
<script>
    export default {
      methods:{
        handleLogin(){
          this.$router.push('/login')
        }
      }
    }
</script>

<style scoped lang="scss">
  .header-wrap{
    background:#c50206;
    height: 44px;
    width: 100%;
    img{
      width: 140px;
      height: 36px;
      float: left;
      margin: 4px 4px  ;
    }
    a{
      float: right;
      width: 50px;
      height: 30px;
      background:#c50206;
      font-size: 18px;
      text-align: center;
      color: #fff;
      margin: 10px 4px
    }
  }
</style>
