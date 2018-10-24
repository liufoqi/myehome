<template>
<div class="main">
  <div class="main-wrap">
    <div class="main">
      <div class="avatar">
        <div class="title">我的党建</div>
        <div v-if="!$store.state.token" >
          <div class="img"></div>
          <p @click="handleLogin">您还没有登录</p>
        </div>
        <div v-else >
          <div class="img">
            <img :src="this.list.header">
          </div>
          <p >{{this.list.username}}</p>
      </div>
      </div>
      <div class="select">
        <div class="clearfix selecte" v-for="(item,index) in detail" :key="index"  @click="handleDetail(item.path)" >
          <div  >
            <div class="fll" >
              <img :src="item.src" class="fll" >
              <span class="fll text" > {{item.text}}</span>
            </div>
            <span class="flr gtr"> > </span>
          </div>
        </div>
      </div>
      <div class='btn' v-if="$store.state.token">
      <button @click="handleExit">退出登录</button>
      </div>
      <div class="btn" v-else>
      </div>
    </div>
  </div>
  <div class="main-footer">
    <Footer></Footer>
  </div>
</div>
</template>
<script>
  import Footer from '@/components/footer/manFooter.vue'
  export default {
      components:{
           Footer,
      },
    data() {
      return{
        isLogin:true,
        list:{},
        detail:[
          {
            path:'/person',
            src: require('../../img/person.png'),
            text:'个人信息'
          },
          { path:'/jifen',
            src: require('../../img/lxjf.png'),
            text:'个人量化积分'
          },
          {
             path:'/xgmm',
             src: require('../../img/xgmm.png'),
            text:'修改密码'
          },
          {
            path:'/dfjiaona',
            src: require('../../img/icon3.png'),
            text:'党费缴纳'
          },
        ]}},
    methods:{
      getData() {
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          if (res.code = 1) {
            this.list = res.data.data
            // console.log(this.list)
          }
          else {
            alert('您的登录状态已过期，跳转登录页！')
            this.$router.push('/login')
          }
        })
      },
      handleLogin(){
        this.$router.push('/login')
      },
      handleDetail(path){
        if (this.$store.state.token) {
          this.$router.push(`${path}`)
        }
         else{
           this.$router.push('/login')
        }
      },
      handleExit(){
        this.$store.commit('DEL_token')
        this.$router.push('/login')
      }
    },
   created(){
        this.getData()
    }
  }
</script>
<style scoped  lang="scss">
  .main{
    .avatar{
      background: #c50206;
      height: 184px;
      width: 100%;
      color: #fff;

      .title{
        font-size: 18px;
        padding-top: 10px;
        text-align: center;
        width: 100%;
      }
      .img{
        margin: 40px auto 0;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background: url("../../img/yuan.png");
        background-size: 60px,60px;
        overflow: hidden;

        img{
          width: 60px;
          height: 60px;
          display: table-cell;
          vertical-align: middle;
          text-align: center;

        }
      }
      p{
        font-size: 14px;
        text-align: center;
        width: 100%;
        font-weight: 700;
        margin-top: 5px;
      }
    }
    .selecte{
      border-bottom: 1px solid #c1c1c1;
      width: 345px;
      height:52px;
      margin: 0 auto;
      padding-top: 15px;
      img{
        height: 32px;
        width: 32px;
      }
      .text{
        font-size: 18px;
        padding-left: 15px;
        color: #898989;
      }
      .gtr{
        font-size: 18px;
      }
    }

  }
  .main{
    .btn{
      margin: 0 auto;
      width: 345px;
      button{
        width: 345px;
        height: 50px;
        color: #fff;
        background-color:rgba(12*16+5,2,6,0.8);
        border: 1px solid rgba(194,45,6,0.8);
        border-radius: 5px;
      }
    }
    .main-footer{
        position: absolute;
        bottom: 0;
        width: 100%;

      }
  }

</style>
<!--/*.clearfix{*/-->
<!--/*content:'';*/-->
<!--/*display: block;*/-->
<!--/*clear: both;*/-->
<!--/*height: 0;*/-->
<!--/*width: 0;*/-->
<!--/*}*/-->
