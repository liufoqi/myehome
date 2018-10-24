<template>
    <div class="footer">
      <div>
         <div class=" fll width fl footer-both" @click="handleMain">
           <div class="bt"></div>
           <p >首页</p>
         </div>
           <div class=" padding width  fm fll" @click=" handleTz">
             <div class="bt"></div>
             <p >通知早知道</p>
           </div>
           <div class="fll width footer-both fr">
             <div class="bt"></div>
           <p>我的党建</p>

        </div>
      </div>
    </div>
</template>

<script>
  export default  {
     data(){
       return{}

     },
      methods: {
        handleMain(){
          this.$router.push('/')
        },
        handleTz(){
          this.$router.push('/tz')
        }
      }
    }

</script>

<style scoped lang="scss">
.footer {
  height: 46px;
  font-size: 10px;
  width: 100%;
  .padding{
  }

  .footer-both {
    text-align: center;
    p{
    margin-top: 28px;
  }
  }
}
.footer-both:hover{
}
.fl{
  width: 33%;
  text-align: center;
  height: 28px;
  background: url("../../img/mainNav/党_grey.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  .bt{
    border-top: 2px solid #fff;
  }
}
.fm{
  width: 34%;
  height: 28px;
  background: url("../../img/mainNav/消息_grey.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  .bt{
    border-top: 2px solid #fff;
  }
  p{
    margin-top: 28px;
    text-align: center;
  }
}
.fr{
  width: 33%;
  height: 28px;
  background: url("../../img/mainNav/会员_red.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  padding-right: 0;
  .bt{
    border-top: 2px solid red;
  }
}

</style>
