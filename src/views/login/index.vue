<template>
    <div class="login">
      <div class="header-wrap clearfix">
        <div class="left fll" @click="handleReturn"><</div>
        <div class="title fll">登录</div>
      </div>
      <div class="login-wrap">
        <div class="icon">
          <img src="../../img/logo.png">
        </div>
        <div class="login-form">
          <input type="username" placeholder="身份证号" autofocus="autofocus" v-model="formatDate.id_card">
          <input type="password" placeholder="密码" v-model="formatDate.password">
          <button @click="handleLogin" autofocus="autofocus">登录</button>
          </div>
        </div>
        </div>
</template>

<script>
  import qs from 'qs'
    export default {
        name: "login",
      data(){
          return{
            formatDate:{
              id_card:'',
              password:''
            }
          }
      },
      methods:{
        handleLogin(){
          console.log(this.formatDate)
          this.$axios.post('hhdj/user/userLogin.do',this.formatDate).then(res=>{
            if(res.code===1){
              alert(res.token);
              this.$store.commit('SET_token',res.token);
              this.$store.commit('SET_information',res.data);
              if(this.$store.state.token){
                this.$router.back(-1)
                console.log(this.$store.state.userInfo)
              }else{
                this.$router.push('/login');
              }
            }else{
              alert(res.msg)
            }
          })
        },
        handleReturn(){
          this.$router.back(-1)
        }
      },

    }
</script>

<style scoped lang="scss">
 .login {
   height: 667px;
   width: 375px;
   background: #c50206;
   .header-wrap {
      height: 40px;
      width: 100%;
     color:#fff;
     padding-top: 10px;
     .left{
       font-size: 26px;
       font-weight: 100;
       height: 50px;
       width:10px;
       padding-left: 10px;

     }
   .title{
     font-size: 20px;
     width: 345px;
     text-align: center;
   }
 }
 }
  .login-wrap{
    .icon{
      img{
        margin: 0 80px 35px;
        width: 215px;
        height: 50px;
      }
    }
    .login-form{
      input{
        height: 40px;
        width: 265px;
        margin: 0px 47px 10px 47px;
        border-radius: 8px;
        border: 1px solid gold;
        background: #c50206;
        padding: 0 0 0 10px;
        outline:none;
      }
      button {
        color: #fff;
        font-weight: 700;
        height: 40px;
        width: 280px;
        margin: 0 47px;
        border-radius: 8px;
        background: #E3574F;
        border: 1px solid #E3574F;
        outline: none;
      }
    }
  }

</style>
